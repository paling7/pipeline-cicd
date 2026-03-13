const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Application CI/CD déployée');
});

module.exports = app;

