import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  lineNumber: {
    type: Number,
    required: true,
  },
  defectType: {
    type: String,
    required: true,
  },
  confidenceScore: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Log || mongoose.model('Log', LogSchema);
