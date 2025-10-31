import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import ChartDisplay from "./components/ChartDisplay";
import { getFiles } from "./services/api";

function App() {
  const [chartData, setChartData] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getFiles();
      setHistory(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Excel Analytics Platform 📊
      </h1>

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 mb-6">
        <FileUpload setChartData={setChartData} />
      </div>

      {chartData && (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <ChartDisplay data={chartData} />
        </div>
      )}

      <div className="max-w-2xl mx-auto mt-6 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">Upload History</h2>
        <ul>
          {history.map((file) => (
            <li key={file._id} className="border-b py-1 text-gray-600">
              {file.fileName} - {new Date(file.uploadedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;