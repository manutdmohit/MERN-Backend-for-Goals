// @desc Get Goals
// @route GET /api/goals
// @access Private
exports.getGoals = (req, res) => {
  res.status(200).json({
    message: 'Goals',
  });
};

// @desc Set Goal
// @route POST /api/goals
// @access Private

exports.setGoal = (req, res) => {
  res.status(200).json({
    message: 'Set Goals',
  });
};

// @desc  Update Goal
// @route PUT /api/goals/:id
// @access Private

exports.updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
exports.deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Deleted goal ${req.params.id}`,
  });
};
