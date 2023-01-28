const Message = require("../models/messageModel");
const mongoose = require("mongoose");

// get all Messages
const getMessages = async (req, res) => {
  const messages = await Message.find({}).sort({ createdAt: -1 });

  res.status(200).json(messages);
};

// get a single message
const getMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }

  const message = await Message.findById(id);

  if (!message) {
    return res.status(404).json({ error: "No such message" });
  }

  res.status(200).json(message);
};

// create a new message
const createMessage = async (req, res) => {
  const { title, load, reps } = req.body;

  // add to the database
  try {
    const message = await Message.create({ title, load, reps });
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Message
const deleteMessage = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such message" });
    }

    const message = await Message.findOneAndDelete({ _id: id });

    if (!message) {
      return res.status(400).json({ error: "No such message" });
    }

    res.status(200).json(message);

};



// update a Message
const updateMessage = async (req, res) => {

const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such message'})
  }

  const message = await Message.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!message) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(message);

};

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  deleteMessage,
  updateMessage,
};
