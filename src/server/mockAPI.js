const express = require('express');
const bodyParser = require ('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/sentiment', (req, res) => {
    const mockResponse = {
        polarity: 'positive',
        subjectivity: 'subjective',
        text: 'This is a sample text'
    };
    res.send(mockResponse);
} );

app.listen(PORT, () => {
    console.log('Mock API Server is running on port ${PORT}');

});