const express = require("express");
const {
  getMessages,
  getMessage,
  createMessage,
  deleteMessage,
  updateMessage,
} = require("../controllers/messageController");

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// require auth to view data 
router.use(requireAuth)

// GET all Messages
router.get("/", getMessages);

// GET a single Message
router.get("/:id", getMessage);

// POST a new Message
router.post("/", createMessage);

// DELETE a Message
router.delete("/:id", deleteMessage);

// UPDATE a Message
router.patch("/:id", updateMessage);

module.exports = router;
