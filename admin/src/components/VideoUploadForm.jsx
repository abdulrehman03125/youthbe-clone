import React, { useState } from "react";
import axios from "../services/api";
import { UploadCloud, FileVideo, Text, Loader2, CheckCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function VideoUploadForm() {
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async () => {
    if (!video) {
      toast.warning("Please select a video first");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("description", description);

    try {
      setLoading(true);
      setUploaded(false);
      await axios.post("/upload", formData);
      toast.success("Video uploaded successfully!");
      setVideo(null);
      setDescription("");
      setUploaded(true);
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FileVideo className="text-blue-500" size={28} />
          Upload Video
        </h2>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700 font-semibold">
            Choose a video:
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-md text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-semibold flex items-center gap-2">
            <Text size={18} />
            Video Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder="Enter video description..."
            className="w-full px-4 py-2 border rounded-md text-sm resize-none"
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Uploading...
            </>
          ) : uploaded ? (
            <>
              <CheckCircle size={20} />
              Uploaded
            </>
          ) : (
            <>
              <UploadCloud size={20} />
              Submit
            </>
          )}
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default VideoUploadForm;
