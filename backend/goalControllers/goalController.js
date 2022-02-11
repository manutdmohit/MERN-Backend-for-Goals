const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private
exports.getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Goals',
  });
});

// @desc Set Goal
// @route POST /api/goals
// @access Private

exports.setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error('Please add a text field');
  }
  res.status(200).json({
    message: 'Set Goals',
  });
});

// @desc  Update Goal
// @route PUT /api/goals/:id
// @access Private

exports.updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Deleted goal ${req.params.id}`,
  });
});
