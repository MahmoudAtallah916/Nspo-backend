// models/Investor.js
import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema(
  {
    nationalId: String,
    idType: String,
    nationality: String,
    companyName: String,
    email: String,
    phone: String,
    fullName: String,
    sector: String,
    investmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Investment' }, 
    identityPhotoPath: String, 
    commercialRegisterPath: String,
    taxCardPath: String,
    securityApprovalPath: String, 
  },
  { timestamps: true }
);

export default mongoose.model('Investor', investorSchema);


// ============================================
// CONTROLLER: GET ALL INVESTORS (ADMIN ONLY)
// ============================================

