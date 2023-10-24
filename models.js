//NOT USED
const mongoose = require('mongoose');

//Reply

const ReplySchema = new mongoose.Schema({
    text: { type: String },
    delete_password: { type: String },
    created_on: { type: Date, default: new Date() },
    bumped_on: { type: Date, default: new Date() },
    reported: { type:Boolean, default: false}
})

//Thread

const ThreadSchema = new mongoose.Schema({
    text: { type: String, required: true },
    created_on: { type: Date, required: true },
    bumped_on: { type: Date, required: true },
    replies: {
      type: [ReplySchema],
      default: []
    },
    //reported and delete_password fields will not be retrieved by default
    reported: { type: Boolean, default: false, select: false },
    delete_password: { type: String, required: true, select: false }
  });


