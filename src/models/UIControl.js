import mongoose from 'mongoose';

const uiControlSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    type: { type: String, enum: ['page', 'section'], required: true },
    scope: {
      page: { type: String, required: true },
      section: { type: String }
    },
    isEnabled: { type: Boolean, default: true },
    fallback: {
      message: { type: String }
    },
    roles: [{ type: String }],
    schedule: {
      startDate: { type: Date },
      endDate: { type: Date }
    }
  },
  { 
    timestamps: true,
    collection: 'ui_controls'
  }
);

export default mongoose.model('UIControl', uiControlSchema);
