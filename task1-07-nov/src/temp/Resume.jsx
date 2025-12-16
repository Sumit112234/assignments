import React, { useState, useCallback } from "react";
import { FiUpload, FiFile, FiLoader } from "react-icons/fi";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileSelect = (file) => {
    if (!file) return;
    setFile(file);
    setResult(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
  };

  const extractResume = async () => {
    if (!file) return alert("Please upload a file first.");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/extract-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700">

        <h2 className="text-3xl font-bold text-center">Resume Extractor</h2>
        <p className="text-gray-400 text-center">
          Upload your PDF, DOCX, or image resume and extract structured JSON data
        </p>

        {/* Upload Box */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition ${
            dragActive ? "border-purple-500 bg-gray-700" : "border-gray-600"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf,.docx,.png,.jpg,.jpeg"
            onChange={(e) => handleFileSelect(e.target.files[0])}
            className="hidden"
            id="uploadInput"
          />

          {file ? (
            <div className="flex flex-col items-center gap-2">
              <FiFile size={40} className="text-purple-400" />
              <p className="text-lg">{file.name}</p>
              <label
                htmlFor="uploadInput"
                className="text-sm text-purple-400 underline cursor-pointer"
              >
                Change file
              </label>
            </div>
          ) : (
            <label htmlFor="uploadInput" className="cursor-pointer">
              <FiUpload size={50} className="mx-auto text-gray-400" />
              <p className="mt-4 text-gray-300">
                Drag & drop your resume here
              </p>
              <p className="text-sm text-gray-500">or click to browse files</p>
            </label>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={extractResume}
          disabled={!file || loading}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 transition text-lg font-medium"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <FiLoader className="animate-spin" /> Extracting...
            </span>
          ) : (
            "Extract Resume Data"
          )}
        </button>
        

        {/* JSON Result */}
        {result && (
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl overflow-auto max-h-[450px]">
            <h3 className="text-xl font-semibold mb-3">Extracted JSON</h3>
            <pre className="text-green-400 text-sm whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}
