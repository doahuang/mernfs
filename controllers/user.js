const User = require('../models/user');

const getUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

const addUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ err: 'User existed' });
  }

  const { name, email, password } = req.body;
  user = new User({
    name,
    email,
    password
  });
  user.save();
};

module.exports = {
  getUsers,
  addUser,
};