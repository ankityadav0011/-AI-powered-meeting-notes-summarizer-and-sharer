import React from 'react';

function SummaryEditor({ summary, onEdit }) {
  const handleChange = (e) => onEdit(e.target.value);

  return (
    <div className="mb-4 p-4 border rounded bg-gray-50">
      <label className="block font-medium mb-2 text-gray-700">Edit Summary:</label>
      <textarea
        value={summary}
        onChange={handleChange}
        rows={10}
        className="w-full px-3 py-2 border rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-200 
                   font-mono 
                   bg-white text-black placeholder-gray-400"
        placeholder="Type your summary here..."
      />
    </div>
  );
}

export default SummaryEditor;
