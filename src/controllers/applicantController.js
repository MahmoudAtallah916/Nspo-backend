import Applicant from '../models/Applicant.js';
import Job from '../models/Job.js';
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose'
const tryParse = (val) => {
  if (typeof val !== "string") return val;
  val = val.trim();
  if (!val) return undefined;
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

export const uploadApplicant = async (req, res) => {
  try {
    const body = { ...req.body };

    const contactInfo = tryParse(body.contactInfo) || {
      phone: body.phone,
      governorate: body.governorate,
      center: body.center,
      address: body.address,
    };
    const education =
      tryParse(body.education) || tryParse(body.education || "{}");
    const experience =
      tryParse(body.experience) || tryParse(body.experiences) || [];
    const skills =
      tryParse(body.skills) ||
      (body.skills
        ? body.skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : []);
    const militaryService = tryParse(body.militaryService) || {};

    let appliedJobsRaw =
      tryParse(body.appliedJobs) || body.jobId || body.jobIds;
    let appliedJobs = [];
    if (appliedJobsRaw) {
      if (typeof appliedJobsRaw === "string") {
        appliedJobs = [
          { job: appliedJobsRaw, status: body.status || "pending" },
        ];
      } else if (Array.isArray(appliedJobsRaw)) {
        appliedJobs = appliedJobsRaw
          .map((item) => {
            if (typeof item === "string")
              return { job: item, status: "pending" };
            if (item && item.job)
              return { job: item.job, status: item.status || "pending" };
            return null;
          })
          .filter(Boolean);
      } else if (appliedJobsRaw.job) {
        appliedJobs = [
          {
            job: appliedJobsRaw.job,
            status: appliedJobsRaw.status || "pending",
          },
        ];
      }
    }

    const applicantData = {
      fullName: body.fullName,
      nationalId: body.nationalId,
      birthDate: body.birthDate,
      maritalStatus: body.maritalStatus,
      gender: body.gender,
      religion: body.religion,
      medicalStatus: body.medicalStatus,
      isWarInjured: body.isWarInjured === "true" || body.isWarInjured === true,
      injuryDetails: body.injuryDetails,
      contactInfo,
      education,
      experience,
      totalExperienceYears: body.totalExperienceYears,
      skills,
      militaryService,
      appliedJobs,
    };

    if (req.file) applicantData.cvPath = req.file.path;

    if (
      !applicantData.fullName ||
      !applicantData.nationalId ||
      !applicantData.birthDate
    ) {
      return res
        .status(400)
        .json({ error: "fullName, nationalId and birthDate are required" });
    }

    const applicant = new Applicant(applicantData);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (err) {
    console.error("Error creating applicant:", err);
    res.status(400).json({ error: err.message });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getApplicantsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const jobObjectId = mongoose.Types.ObjectId.isValid(jobId)
      ? new mongoose.Types.ObjectId(jobId)
      : null;

    if (!jobObjectId) return res.status(400).json({ error: "JobId غير صالح" });

    const jobDoc = await Job.findById(jobObjectId).select("title").lean();
    if (!jobDoc) return res.status(404).json({ error: "الوظيفة غير موجودة" });

    const applicants = await Applicant.find({
      appliedJobs: { $elemMatch: { job: jobObjectId } },
    });

    const applicantsWithCV = applicants.map((applicant) => {
      let status = null;

      if (Array.isArray(applicant.appliedJobs)) {
        const match = applicant.appliedJobs.find((a) => {
          if (a && a.job) {
            const jobVal =
              typeof a.job === "object" && a.job._id
                ? a.job._id.toString()
                : a.job.toString();
            return jobVal === jobId;
          }
          return false;
        });

        if (match && typeof match === "object") {
          status = match.status || null;
        }
      }

      return {
        ...applicant,
        contactInfo: applicant.contactInfo || {
          phone: "",
          governorate: "",
          center: "",
          address: "",
        },
        education: applicant.education || { degree: "", university: "" },
        experience: applicant.experience || [],
        skills: applicant.skills || [],
        militaryService: applicant.militaryService || {
          status: "",
          conductGrade: "",
          serviceYear: null,
        },
        appliedJobs: applicant.appliedJobs || [],
        status,
        jobTitle: jobDoc.title,
        cvUrl: applicant.cvPath
          ? `${req.protocol}://${req.get("host")}/${applicant.cvPath.replace(
              /\\/g,
              "/"
            )}`
          : null,
      };
    });

    res.json(applicantsWithCV);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { jobId, status } = req.body;
    const validStatuses = ["pending", "under-review", "accepted", "rejected"];
    if (!jobId || !status || !validStatuses.includes(status)) {
      return res.status(400).json({
        error:
          "jobId and valid status (pending, under-review, accepted, rejected) are required",
      });
    }
    const applicant = await Applicant.findById(req.params.applicantId);
    if (!applicant)
      return res.status(404).json({ error: "Applicant not found" });
    let updated = false;
    if (Array.isArray(applicant.appliedJobs)) {
      for (let app of applicant.appliedJobs) {
        if (
          (typeof app === "object" &&
            app.job &&
            app.job.toString() === jobId) ||
          app === jobId
        ) {
          if (typeof app === "object") {
            app.status = status;
            updated = true;
          }
        }
      }
    }
    if (!updated)
      return res.status(404).json({
        error:
          "Application for this job not found or legacy format (please migrate)",
      });
    await applicant.save();
    res.json({ message: "Application status updated successfully", status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const exportAllByJob = async (req, res) => {
  try {
    const jobs = await Job.find().select("title").lean();
    const results = [];

    for (const job of jobs) {
      const jobId = job._id.toString();

      const applicants = await Applicant.find({
        "appliedJobs.job": job._id,
      }).lean();

      const applicantsWithFullData = applicants.map((applicant) => {
        const appEntry = applicant.appliedJobs.find(
          (a) => a.job.toString() === jobId
        );
        const status = appEntry ? appEntry.status : "pending";

        return {
          applicantId: applicant._id,
          fullName: applicant.fullName,
          nationalId: applicant.nationalId,
          birthDate: applicant.birthDate,
          maritalStatus: applicant.maritalStatus,
          gender: applicant.gender,
          religion: applicant.religion,
          medicalStatus: applicant.medicalStatus,
          isWarInjured: applicant.isWarInjured,
          injuryDetails: applicant.injuryDetails,
          contactInfo: applicant.contactInfo || {},
          education: applicant.education || {},
          experience: applicant.experience || [],
          totalExperienceYears: applicant.totalExperienceYears,
          skills: applicant.skills || [],
          militaryService: applicant.militaryService || {},
          appliedJobId: jobId,
          appliedJobTitle: job.title,
          applicationStatus: status,
          cvUrl: applicant.cvPath
            ? `${req.protocol}://${req.get("host")}/${applicant.cvPath.replace(
                /\\/g,
                "/"
              )}`
            : null,
        };
      });

      results.push({
        jobId,
        jobTitle: job.title,
        applicants: applicantsWithFullData,
      });
    }

    res.json(results);
  } catch (err) {
    console.error("Error exporting applicants by all jobs:", err);
    res.status(500).json({ error: err.message });
  }
};

export const exportByJobToExcel = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });

    const applicants = await Applicant.find({
      "appliedJobs.job": jobId,
    }).lean();

    if (!applicants.length)
      return res.status(404).json({ error: "No applicants found" });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("المتقدمين");

    // العنوان الرئيسي
    worksheet.mergeCells("A1:W1");
    const mainTitle = worksheet.getCell("A1");
    mainTitle.value = `المتقدمين على وظيفة: ${job.title} (${
      job.company || "غير محدد"
    })`;
    mainTitle.font = { size: 16, bold: true };
    mainTitle.alignment = { vertical: "middle", horizontal: "center" };

    worksheet.addRow([]);

    // رؤوس الأعمدة
    const headers = [
      "الاسم الكامل",
      "الرقم القومي",
      "تاريخ الميلاد",
      "الحالة الاجتماعية",
      "النوع",
      "الديانة",
      "الحالة الطبية",
      "إصابة حرب؟",
      "تفاصيل الإصابة",
      "رقم الهاتف",
      "المحافظة",
      "المركز",
      "العنوان",
      "المؤهل الدراسي",
      "الجامعة",
      "الخبرات السابقة",
      "إجمالي سنوات الخبرة",
      "المهارات",
      "حالة التجنيد",
      "تقدير السلوك العسكري",
      "سنة الخدمة",
      "حالة الطلب",
      "رابط السيرة الذاتية",
    ];

    const headerRow = worksheet.addRow(headers);
    headerRow.font = { bold: true, size: 13 };
    headerRow.alignment = { horizontal: "center", vertical: "middle" };
    headerRow.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // تعبئة البيانات
    applicants.forEach((a) => {
      worksheet.addRow([
        a.fullName,
        a.nationalId,
        a.birthDate ? new Date(a.birthDate).toLocaleDateString("ar-EG") : "",
        a.maritalStatus || "",
        a.gender || "",
        a.religion || "",
        a.medicalStatus || "",
        a.isWarInjured ? "نعم" : "لا",
        a.injuryDetails || "",
        a.contactInfo?.phone || "",
        a.contactInfo?.governorate || "",
        a.contactInfo?.center || "",
        a.contactInfo?.address || "",
        a.education?.degree || "",
        a.education?.university || "",
        a.experience
          ?.map((exp) => `${exp.company} - ${exp.role} (${exp.years} سنوات)`)
          .join(" / ") || "",
        a.totalExperienceYears || 0,
        a.skills?.join(", ") || "",
        a.militaryService?.status || "",
        a.militaryService?.conductGrade || "",
        a.militaryService?.serviceYear || "",
        a.appliedJobs.find((j) => j.job.toString() === jobId)?.status ||
          "pending",
        a.cvPath
          ? `${req.protocol}://${req.get("host")}/${a.cvPath.replace(
              "\\",
              "/"
            )}`
          : "",
      ]);
    });

    // تنسيق الأعمدة
    worksheet.columns.forEach((col) => {
      col.width = 25;
      col.alignment = {
        horizontal: "center",
        vertical: "middle",
        wrapText: true,
      };
    });

    // إنشاء الملف
    const fileName = `Applicants_${job.title.replace(/\s+/g, "_")}.xlsx`;
    const filePath = path.join("uploads", fileName);

    await workbook.xlsx.writeFile(filePath);

    // إرسال الملف
    res.download(filePath, fileName, (err) => {
      if (err) console.error("Error sending file:", err);
      fs.unlink(filePath, () => {});
    });
  } catch (err) {
    console.error("Error exporting applicants to Excel:", err);
    res.status(500).json({ error: err.message });
  }
};