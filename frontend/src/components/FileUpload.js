import React, { useState } from "react";
import { uploadFile } from "../services/api";

function FileUpload({ setChartData }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const res = await uploadFile(file);
      setChartData(res.data.data);
      alert("File uploaded successfully ✅");
    } catch (err) {
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <label className="block text-gray-700 font-medium mb-2">Upload Excel File (.xlsx or .xls)</label>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        className="border border-gray-400 p-2 rounded-md w-full"
      />
      {loading && <p className="text-blue-600 mt-2">Uploading...</p>}
    </div>
  );
}

export default FileUpload;