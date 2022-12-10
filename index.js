// Dependencies
const express = require('express');
const serveIndex = require('serve-index');

// Settings
const PORT = process.env.PORT || 3000;

// Main objects
const app = express();

app.use(
    express.static('public'),
    serveIndex('public', { icons: true })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));