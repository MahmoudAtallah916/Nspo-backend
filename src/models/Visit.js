import mongoose from 'mongoose';

const endpointsSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    method: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { _id: false }
);

const visitSchema = new mongoose.Schema(
  {
    // Format: YYYY-MM-DD (local server time)
    date: { type: String, required: true, index: true, unique: true },
    totalVisits: { type: Number, default: 0 },
    uniqueVisitors: { type: Number, default: 0 },
    endpoints: { type: [endpointsSchema], default: [] },
  },
  { timestamps: false }
);

visitSchema.index({ date: 1 }, { unique: true });

export default mongoose.model('Visit', visitSchema);

