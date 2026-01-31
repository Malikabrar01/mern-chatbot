
const express = require('express');
const app = express();
app.listen(5000, () => console.log('Server is running on port 5000'));

// ... existing imports
const chatRoutes = require('./routes/chat');

// ... after your middleware (app.use(express.json()))
app.use('/api/chat', chatRoutes);
