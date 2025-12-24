import mongoose from 'mongoose';

const applicantSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    nationalId: { type: String, required: true },
    birthDate: { type: Date, required: true },
    maritalStatus: String,
    gender: String,
    religion: String,
    medicalStatus: String,
    isWarInjured: Boolean,
    injuryDetails: String,
    contactInfo: {
      phone: String,
      governorate: String,
      center: String,
      address: String,
    },
    education: {
      degree: String,
      university: String,
    },
    experience: [
      {
        company: String,
        role: String,
        years: Number,
      },
    ],
    totalExperienceYears: Number,
    skills: [String],
    militaryService: {
      status: String,
      conductGrade: String,
      serviceYear: Number,
    },
    appliedJobs: [
      {
        job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
        status: {
          type: String,
          enum: ["pending", "under-review", "accepted", "rejected"],
          default: "pending",
        },
      },
    ],
    cvPath: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Applicant', applicantSchema);