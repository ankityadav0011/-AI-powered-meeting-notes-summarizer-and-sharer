import React, { useState } from 'react';

function PromptInput({ onPrompt }) {
  const [prompt, setPrompt] = useState('');

  const handleChange = (e) => {
    setPrompt(e.target.value);
    onPrompt(e.target.value);
  };

  return (
    <div className="mb-4 p-4 border rounded bg-amber-300">
      <label className="block font-medium mb-2 text-black">
        Custom Instruction / Prompt:
      </label>
      <input
        type="text"
        value={prompt}
        onChange={handleChange}
        placeholder='e.g. "Summarize for executives"'
        className="w-full px-3 py-2 border rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-200 
                   bg-white text-black placeholder-gray-500"
      />
    </div>
  );
}

export default PromptInput;
