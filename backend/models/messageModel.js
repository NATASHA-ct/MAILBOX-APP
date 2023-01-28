const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mailSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", mailSchema);
