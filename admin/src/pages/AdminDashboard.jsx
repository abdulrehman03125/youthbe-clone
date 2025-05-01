import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VideoUploadForm from "../components/VideoUploadForm";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) navigate("/admin");
  }, [navigate]);

  return (
    <div>
      <h2 className=" flex items-center justify-center bg-gray-100 p-0">Admin Dashboard</h2>
      <VideoUploadForm />
    </div>
  );
}

export default AdminDashboard;
