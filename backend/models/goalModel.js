const mongoose = require('mongoose');

const GoalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model('Goal', GoalSchema);
