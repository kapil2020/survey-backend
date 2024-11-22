const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Endpoint to handle survey submission
app.post('/submit-survey', (req, res) => {
    const responseData = req.body;
    fs.appendFile('responses.json', JSON.stringify(responseData) + '\n', err => {
        if (err) {
            console.error("Error saving data:", err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Success');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
