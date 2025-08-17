import React, { useState } from 'react';
import axios from 'axios';
import TranscriptUpload from './components/TranscriptUpload';
import PromptInput from './components/PromptInput';
import SummaryEditor from './components/SummaryEditor';
import EmailShare from './components/EmailShare';

function App() {
  const [transcript, setTranscript] = useState('');
  const [prompt, setPrompt] = useState('');
  const [summary, setSummary] = useState('');
  const [editedSummary, setEditedSummary] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTranscript = (t) => setTranscript(t);
  const handlePrompt = (p) => setPrompt(p);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const res = await axios.post('https://ai-powered-meeting-notes-summarizer-and-ik17.onrender.com/api/summary', { transcript, prompt });
      console.log("error happend")
      setSummary(res.data.summary);
      setEditedSummary(res.data.summary);
      setShowEditor(true);
    } catch (err) {
      alert('Failed to generate summary');
    }
    setLoading(false);
  };

  const handleEdit = (s) => setEditedSummary(s);
  const handleSendEmail = async (recipients) => {
    try {
      await axios.post('https://ai-powered-meeting-notes-summarizer-and-ik17.onrender.com/api/email', { recipients, summary: editedSummary });
      alert('Email sent!');
    } catch (err) {
      alert('Failed to send email');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full bg-blue-400 shadow-xl rounded-none p-8 flex flex-col justify-center items-center">
            <div className="w-full max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
                AI Meeting Notes Summarizer & Sharer
              </h2>
              <TranscriptUpload onUpload={handleTranscript} />
              <PromptInput onPrompt={handlePrompt} />
              <button
                className="w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                onClick={generateSummary}
                disabled={loading || !transcript || !prompt}
              >
                {loading ? 'Generating...' : 'Generate Summary'}
              </button>
              {showEditor && (
                <>
                  <SummaryEditor summary={editedSummary} onEdit={handleEdit} />
                  <EmailShare onSend={handleSendEmail} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
