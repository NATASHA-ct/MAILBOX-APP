const express = require("express");
const Message = require("../models/messageModel");

const router = express.Router();

// GET all messages
router.get("/", (req, res) => {
  res.json({ mssg: "GET all messages" });
});

// GET a single message
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single message" });
});

// POST a new Message
 router.post('/', async (req, res) => {
  const {subject, content, isRead} = req.body
  console.log(req.body)
 try {
    const message = await Message.create({subject, content, isRead})
   res.status(200).json(message)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

 // DELETE a message
 router.delete("/:id", (req, res) => {
   res.json({ mssg: "DELETE a message" });
 });

// UPDATE a message
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a message" });
});

module.exports = router;
