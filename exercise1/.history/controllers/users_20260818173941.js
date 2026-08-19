const User = require('../models/users');

exports.getUsers = async (req, res) => {
 const users = await User.find();
 res.json(users);
};


exports.getUserInfo = (req, res) => {
 const user = users.find(u => u.id == req.params.id)
 if (!user)
  return res.status(404).send('User not found');
 res.json(user);

}


exports.createUser = async (req, res) => {
 console.log("req.body", req.body);

 const user = new User(req, res);
 const seved = await user.save();
 res.status(201).json(seved);
}

exports.updateUser = async (req, res) => {
 const { id } = req.params;

 try {
  const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedUser) {
   return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(updatedUser);

 } catch (error) {
  res.status(500).json({ message: 'Server error' });
 }
}