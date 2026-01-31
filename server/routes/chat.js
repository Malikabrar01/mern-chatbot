const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Route to save a new message
router.post('/send', async (req, res) => {
  try {
    const { sender, text } = req.body;
    const newMessage = new Message({ sender, text });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error saving message", error });
  }
});

// Route to get all messages (for chat history)
router.get('/history', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history", error });
  }
});

module.exports = router;
