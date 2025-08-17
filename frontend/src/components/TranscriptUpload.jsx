import React from 'react';

function TranscriptUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => onUpload(event.target.result);
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="mb-4 p-4 border rounded bg-gray-50">
      <label className="block font-medium mb-2 text-gray-700">Upload transcript (.txt):</label>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 
                   file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  );
}

export default TranscriptUpload;
