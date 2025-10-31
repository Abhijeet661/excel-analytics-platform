import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/files",
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return API.post("/upload", formData);
};

export const getFiles = () => API.get("/");