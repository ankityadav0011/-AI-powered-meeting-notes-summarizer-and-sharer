const axios = require('axios');
require('dotenv').config();

const callAIService = async (transcript, prompt) => {
    try {
        const apiKey = process.env.GROQ_API_KEY;  
        const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

        const response = await axios.post(endpoint, {
            model: 'llama3-8b-8192',  // or 'llama3-70b-8192'
            messages: [
                { role: 'system', content: 'You are an expert meeting summarizer.' },
                { role: 'user', content: `${prompt}\n${transcript}` }
            ],
            temperature: 0.7,
            max_tokens: 500
        }, {
            headers: { 
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content;
    } catch (err) {
        console.error("Error calling Groq service:", err.response?.data || err.message);
        throw err;
    }
};

module.exports = { callAIService };
