/**
 * Simple backend for generating survey results from JSON input
 */

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/survey', (req, res) => {
    try {
        res.status(200).send(JSON.parse(fs.readFileSync('survey-sample.json', 'utf8')));
    } catch(error) {
        res.status(500).send({
            error: error.message
        })
    }
});

app.listen(3456);
