import express from "express";
import multer from "multer";
import { uploadExcel, getFiles } from "../controllers/fileController.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadExcel);
router.get("/", getFiles);

export default router;