const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.API_KEY;
const axios = require('axios');
async function sendRequestToMeaningCloud(text) {
    try {
        const response = await
        axios.post ('https://api.meaningcloud.com/sentiment-2.1',
        {
            key: apiKey,
            text: text,
            lang: 'auto'
        });
        return response.data;
    
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = sendRequestToMeaningCloud;