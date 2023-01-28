const express = require("express");

const router = express.Router();

// GET all messages
router.get("/", (req, res) => {
  res.json({ mssg: "GET all messages" });
});

// GET a single message
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single message" });
});

// // POST a new messages
// router.post("/", (req, res) => {
//   res.json({ mssg: "POST a new message" });
// });

// // DELETE a message
// router.delete("/:id", (req, res) => {
//   res.json({ mssg: "DELETE a message" });
// });

// UPDATE a message
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a message" });
});

module.exports = router;
