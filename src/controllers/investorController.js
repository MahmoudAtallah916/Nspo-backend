// controllers/investorController.js
import Investor from '../models/Investor.js';
import Investment from '../models/Investment.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ExcelJS from 'exceljs';
import { connectDB } from '../config/database.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// مجلد رفع الملفات
const UPLOAD_DIR = path.join(__dirname, '../../uploads/investors/');

// التأكد من وجود المجلد
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const submitInvestor = async (req, res) => {
  try {
    await connectDB();

    const fields = req.body || {};
    const files = req.files || {};

    if (!fields.fullName || !fields.email || !fields.phone) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields: fullName, email, phone",
      });
    }

    // التحقق من وجود investmentId
    if (fields.investmentId) {
      const investment = await Investment.findById(fields.investmentId);
      if (!investment) {
        return res.status(404).json({
          ok: false,
          error: "Investment not found",
        });
      }
    }

    // حفظ الملفات على السيرفر
    const saveFile = (fileArray, prefix) => {
      if (!fileArray || !fileArray[0]) return null;
      
      const file = fileArray[0];
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      const filename = `${prefix}-${uniqueSuffix}${ext}`;
      const filepath = path.join(UPLOAD_DIR, filename);
      
      // كتابة الملف
      fs.writeFileSync(filepath, file.buffer);
      
      // إرجاع المسار النسبي للاستخدام في قاعدة البيانات
      return `/uploads/investors/${filename}`;
    };

    // حفظ كل ملف
    const identityPhotoPath = saveFile(files.identityPhoto, 'identity');
    const commercialRegisterPath = saveFile(files.commercialRegister, 'commercial');
    const taxCardPath = saveFile(files.taxCard, 'tax');
    const securityApprovalPath = saveFile(files.securityApproval, 'security');

    // حفظ البيانات في الداتابيز
    const investor = new Investor({
      nationalId: fields.nationalId,
      idType: fields.idType,
      nationality: fields.nationality,
      companyName: fields.companyName,
      email: fields.email,
      phone: fields.phone,
      fullName: fields.fullName,
      investmentId: fields.investmentId || null,
      identityPhotoPath,
      commercialRegisterPath,
      taxCardPath,
      securityApprovalPath,
    });

    const savedInvestor = await investor.save();

    // بناء HTML للإيميل
    const buildHtml = () => {
      const fieldRows = Object.entries(fields)
        .map(
          ([key, value]) => `
        <tr>
          <td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold;">
            ${key}
          </td>
          <td style="padding:10px;border:1px solid #e5e5e5;">
            ${value || ""}
          </td>
        </tr>
      `
        )
        .join("");

      const fileRows = ["identityPhoto", "commercialRegister", "taxCard", "securityApproval"]
        .map((key) => {
          const arr = files[key];
          return arr && arr.length
            ? `
          <tr>
            <td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold;">
              ${key}
            </td>
            <td style="padding:10px;border:1px solid #e5e5e5;">
              🗂️ ${arr[0].originalname}
            </td>
          </tr>
        `
            : "";
        })
        .join("");

      return `
      <html dir="rtl" lang="ar">
        <body style="font-family: 'Tahoma', sans-serif; background:#f6f7f9; padding:20px;">
          
          <table width="100%" style="max-width:650px;margin:auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <tr>
              <td style="background:#1d4ed8;color:white;padding:25px;text-align:center;font-size:22px;font-weight:bold;">
                <span style="display:inline-flex;gap:10px;align-items:center;">
                  <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.7L4 7l8-4 8 4-8 2.7zm10 3.3l-10 5-10-5v2l10 5 10-5v-2z"/>
                  </svg>
                  طلب استثمار جديد
                </span>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px;">
                <h3 style="margin:0 0 15px;color:#1e293b;font-weight:bold;text-align:right;">
                  تم استلام طلب استثمار جديد، التفاصيل كالتالي:
                </h3>

                <table width="100%" style="border-collapse:collapse;font-size:15px;">
                  <tr>
                    <td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold;">
                      investor_id
                    </td>
                    <td style="padding:10px;border:1px solid #e5e5e5;">
                      ${savedInvestor._id}
                    </td>
                  </tr>
                  ${fieldRows}
                  ${fileRows}
                </table>
                
                <div style="margin-top:20px;padding:15px;background:#f0f9ff;border-radius:8px;border-right:4px solid #1d4ed8;">
                  <p style="margin:0;color:#1e293b;">
                    <strong>🔗 رابط المرفقات:</strong><br>
                    ${identityPhotoPath ? `- صورة الهوية: <a href="${process.env.BASE_URL}${identityPhotoPath}">${identityPhotoPath}</a><br>` : ''}
                    ${commercialRegisterPath ? `- السجل التجاري: <a href="${process.env.BASE_URL}${commercialRegisterPath}">${commercialRegisterPath}</a><br>` : ''}
                    ${taxCardPath ? `- البطاقة الضريبية: <a href="${process.env.BASE_URL}${taxCardPath}">${taxCardPath}</a><br>` : ''}
                    ${securityApprovalPath ? `- الموافقة الأمنية: <a href="${process.env.BASE_URL}${securityApprovalPath}">${securityApprovalPath}</a>` : ''}
                  </p>
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9;padding:15px;text-align:center;color:#475569;font-size:14px;">
                <div style="margin-bottom:8px;font-weight:bold;">مركز دعم المستثمرين</div>
                <div style="margin-top:5px;">
                  البريد: nspo@nspo.com.eg
                </div>
              </td>
            </tr>

          </table>

        </body>
      </html>
      `;
    };

    const html = buildHtml();

    const text = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    // إعداد المرفقات للإيميل (نفس الكود)
    const attachments = [];
    for (const key of ["identityPhoto", "commercialRegister", "taxCard", "securityApproval"]) {
      const arr = files[key];
      if (arr && arr.length > 0) {
        const f = arr[0];
        attachments.push({
          filename: f.originalname,
          content: f.buffer.toString("base64"),
          encoding: "base64",
        });
      }
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return res.status(500).json({
        ok: false,
        error: "Missing RESEND_API_KEY",
      });
    }

    const payload = {
      from: "onboarding@resend.dev",
      to: ["atalahm92@gmail.com"], 
      subject: `طلب استثمار جديد - ${fields.fullName} (ID: ${savedInvestor._id})`,
      html,
      text,
      attachments,
    };

    console.log("Sending email...");

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await resp.json().catch(() => null);

    if (!resp.ok) {
      console.error("Resend API Error:", result);
      return res.status(resp.status || 502).json({
        ok: false,
        error: result || "Resend API error",
      });
    }

    return res.json({ 
      ok: true, 
      message: "تم حفظ البيانات وإرسال الإيميل بنجاح",
      investorId: savedInvestor._id,
      files: {
        identityPhoto: identityPhotoPath,
        commercialRegister: commercialRegisterPath,
        taxCard: taxCardPath,
        securityApproval: securityApprovalPath
      }
    });

  } catch (err) {
    console.error("Error in submitInvestor:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
};


export const getInvestors = async (req, res) => {
  try {
    await connectDB();

    // ✅ جلب جميع المستثمرين مع بيانات الاستثمار المرتبط (populate)
    const investors = await Investor.find({})
      .populate({
        path: 'investmentId',
        select: 'title estimated_investment expected_roi status company_id',
        populate: {
          path: 'company_id',
          select: 'name sector logo'
        }
      })
      .sort({ createdAt: -1 }); // الأحدث أولاً

    // ✅ تنسيق البيانات للإخراج
    const formattedInvestors = investors.map(inv => ({
      _id: inv._id,
      fullName: inv.fullName,
      email: inv.email,
      phone: inv.phone,
      nationalId: inv.nationalId,
      idType: inv.idType,
      nationality: inv.nationality,
      companyName: inv.companyName,
      sector: inv.sector,
      investmentId: inv.investmentId, // كامل بعد populate
      identityPhotoPath: inv.identityPhotoPath,
      commercialRegisterPath: inv.commercialRegisterPath,
      taxCardPath: inv.taxCardPath,
      securityApprovalPath: inv.securityApprovalPath,
      createdAt: inv.createdAt,
      updatedAt: inv.updatedAt,

      // ✅ روابط كاملة للملفات (للعرض أو التحميل)
      fileUrls: {
        identityPhoto: inv.identityPhotoPath ? `${process.env.BASE_URL}${inv.identityPhotoPath}` : null,
        commercialRegister: inv.commercialRegisterPath ? `${process.env.BASE_URL}${inv.commercialRegisterPath}` : null,
        taxCard: inv.taxCardPath ? `${process.env.BASE_URL}${inv.taxCardPath}` : null,
        securityApproval: inv.securityApprovalPath ? `${process.env.BASE_URL}${inv.securityApprovalPath}` : null,
      }
    }));

    return res.status(200).json({
      ok: true,
      count: formattedInvestors.length,
      investors: formattedInvestors
    });

  } catch (err) {
    console.error('❌ Error in getInvestors:', err);
    return res.status(500).json({
      ok: false,
      error: 'Internal server error',
      details: err.message
    });
  }
};

export const exportInvestorsExcel = async (req, res) => {
  try {
    await connectDB();

    const investors = await Investor.find({})
      .populate({
        path: 'investmentId',
        select: 'title estimated_investment expected_roi status company_id',
        populate: {
          path: 'company_id',
          select: 'name sector'
        }
      })
      .sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Investors');

    worksheet.columns = [
      { header: 'Investor ID', key: 'investorId', width: 28 },
      { header: 'Full Name', key: 'fullName', width: 24 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'National ID', key: 'nationalId', width: 24 },
      { header: 'ID Type', key: 'idType', width: 16 },
      { header: 'Nationality', key: 'nationality', width: 18 },
      { header: 'Company Name', key: 'companyName', width: 24 },
      { header: 'Investment ID', key: 'investmentId', width: 28 },
      { header: 'Investment Title', key: 'investmentTitle', width: 28 },
      { header: 'Estimated Investment', key: 'estimatedInvestment', width: 20 },
      { header: 'Expected ROI', key: 'expectedRoi', width: 18 },
      { header: 'Investment Status', key: 'investmentStatus', width: 18 },
      { header: 'Related Company', key: 'relatedCompany', width: 24 },
      { header: 'Related Sector', key: 'relatedSector', width: 20 },
      { header: 'Identity Photo URL', key: 'identityPhotoUrl', width: 40 },
      { header: 'Commercial Register URL', key: 'commercialRegisterUrl', width: 40 },
      { header: 'Tax Card URL', key: 'taxCardUrl', width: 40 },
      { header: 'Security Approval URL', key: 'securityApprovalUrl', width: 40 },
      { header: 'Created At', key: 'createdAt', width: 24 },
      { header: 'Updated At', key: 'updatedAt', width: 24 }
    ];

    worksheet.getRow(1).font = { bold: true };
    worksheet.views = [{ state: 'frozen', ySplit: 1 }];

    const baseUrl = process.env.BASE_URL || '';

    investors.forEach((inv) => {
      const investment = inv.investmentId || null;
      const relatedCompany = investment?.company_id || null;

      worksheet.addRow({
        investorId: inv._id?.toString() || '',
        fullName: inv.fullName || '',
        email: inv.email || '',
        phone: inv.phone || '',
        nationalId: inv.nationalId || '',
        idType: inv.idType || '',
        nationality: inv.nationality || '',
        companyName: inv.companyName || '',
        investmentId: investment?._id?.toString() || '',
        investmentTitle: investment?.title || '',
        estimatedInvestment: investment?.estimated_investment || '',
        expectedRoi: investment?.expected_roi || '',
        investmentStatus: investment?.status || '',
        relatedCompany: relatedCompany?.name || '',
        relatedSector: relatedCompany?.sector || '',
        identityPhotoUrl: inv.identityPhotoPath ? `${baseUrl}${inv.identityPhotoPath}` : '',
        commercialRegisterUrl: inv.commercialRegisterPath ? `${baseUrl}${inv.commercialRegisterPath}` : '',
        taxCardUrl: inv.taxCardPath ? `${baseUrl}${inv.taxCardPath}` : '',
        securityApprovalUrl: inv.securityApprovalPath ? `${baseUrl}${inv.securityApprovalPath}` : '',
        createdAt: inv.createdAt ? new Date(inv.createdAt).toISOString() : '',
        updatedAt: inv.updatedAt ? new Date(inv.updatedAt).toISOString() : ''
      });
    });

    const fileName = `investors-${Date.now()}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

    await workbook.xlsx.write(res);
    return res.end();
  } catch (err) {
    console.error('❌ Error in exportInvestorsExcel:', err);
    return res.status(500).json({
      ok: false,
      error: 'Failed to export investors excel',
      details: err.message
    });
  }
};

