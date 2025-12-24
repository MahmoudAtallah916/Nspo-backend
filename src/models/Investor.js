import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema(
  {
    nationalId: String,
    idType: String,
    nationality: String,
    investmentAmount: Number,
    companyName: String,
    email: String,
    phone: String,
    fullName: String,
    sector: String,
    identityPhotoPath: String,
    commercialRegisterPath: String,
    taxCardPath: String,
  },
  { timestamps: true }
);

export default mongoose.model('Investor', investorSchema);