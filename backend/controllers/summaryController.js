const { callAIService } = require('../services/aiService');

const generateSummary = async (req, res) => {
    const { transcript, prompt } = req.body;
    if (!transcript || !prompt) return res.status(400).json({ message: 'Missing transcript or prompt.' });

    try {
        const summary = await callAIService(transcript, prompt);
        res.status(200).json({ summary });
    } catch (err) {
        res.status(500).json({ message: 'AI API failed', error: err.message });
    }
};

module.exports = { generateSummary };
