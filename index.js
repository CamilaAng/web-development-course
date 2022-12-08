// Dependencies
const express = require('express');

// Settings
const PORT = process.env.PORT || 3000;

// Main objects
const app = express();

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));