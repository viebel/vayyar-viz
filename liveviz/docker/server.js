'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.use(express.static('build'))
app.listen(PORT);
console.log('I am running on http://localhost:' + PORT);
