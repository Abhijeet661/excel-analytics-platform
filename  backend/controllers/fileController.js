import xlsx from "xlsx";
import FileData from "../models/FileData.js";

export const uploadExcel = async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);

    const fileData = new FileData({
      fileName: req.file.originalname,
      data,
    });

    await fileData.save();
    res.json({ message: "File uploaded successfully", data });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export const getFiles = async (req, res) => {
  const files = await FileData.find().sort({ uploadedAt: -1 });
  res.json(files);
};