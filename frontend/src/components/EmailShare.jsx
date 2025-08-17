import React, { useState } from 'react';

function EmailShare({ onSend }) {
  const [recipients, setRecipients] = useState('');

  const handleChange = (e) => setRecipients(e.target.value);
  const handleSend = () => {
    if (recipients.trim()) onSend(recipients.trim());
  };

  return (
    <div className="mb-4 p-4 border rounded bg-gray-50 shadow-sm">
      <label className="block font-medium mb-2 text-gray-700">
        Email recipients (comma separated):
      </label>
      <input
        type="text"
        value={recipients}
        onChange={handleChange}
        placeholder="user1@example.com, user2@example.com"
        className="w-full px-3 py-2 border rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-300 
                   bg-white text-black placeholder-gray-500"
      />
      <button
        onClick={handleSend}
        className="mt-3 w-full px-4 py-2 
                   bg-blue-600 text-white font-medium 
                   rounded-md shadow-sm
                   hover:bg-blue-700 active:bg-blue-800
                   transition-colors duration-200"
      >
        📧 Send Summary by Email
      </button>
    </div>
  );
}

export default EmailShare;
