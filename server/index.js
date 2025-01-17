const express = require('express');

const app = express();

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000
var server = app.listen(PORT, () => console.log(`Server running port ${PORT}`))
