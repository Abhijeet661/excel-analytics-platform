import mongoose from "mongoose";

const fileDataSchema = new mongoose.Schema({
  fileName: String,
  data: Array,
  uploadedAt: { type: Date, default: Date.now },
});

const FileData = mongoose.model("FileData", fileDataSchema);
export default FileData;