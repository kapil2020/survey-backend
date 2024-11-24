const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// File path for responses.json
const responsesFile = path.join(__dirname, 'responses.json');

// Initialize ID counter
let currentId = 1;

if (fs.existsSync(responsesFile)) {
    const data = fs.readFileSync(responsesFile, 'utf8');
    const responses = data.split('\n').filter(line => line).map(JSON.parse);
    if (responses.length > 0) {
        currentId = responses[responses.length - 1].id + 1; // Set ID to the last ID + 1
    }
}

// Endpoint to handle survey submission
app.post('/submit-survey', (req, res) => {
    const responseData = req.body;

    // Add serial ID to the response
    responseData.id = currentId++;

    // Append the response to responses.json
    fs.appendFile(responsesFile, JSON.stringify(responseData) + '\n', (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Success');
        }
    });
});

// Endpoint to fetch all responses
app.get('/responses', (req, res) => {
    fs.readFile(responsesFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading responses.json:', err);
            res.status(500).send('Error reading responses');
        } else {
            res.type('json').send(data); // Serve the JSON data
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
