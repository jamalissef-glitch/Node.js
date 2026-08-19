// const User = require('../models/users');

// // 1. Get all users
// exports.getUsers = async (req, res) => {
//  try {
//   const users = await User.find();
//   res.json(users);
//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }
// };

// // 2. Get single user by ID
// exports.getUserInfo = async (req, res) => {
//  try {
//   const user = await User.findById(req.params.id);
//   if (!user) {
//    return res.status(404).json({ message: 'User not found' });
//   }
//   res.json(user);
//  } catch (error) {
//   res.status(500).json({ message: 'Invalid User ID or Server Error' });
//  }
// };

// // 3. Create a new user
// exports.createUser = async (req, res) => {
//  try {
//   console.log("req.body", req.body);
//   const user = new User(req.body); // req.body ayaa la siiyaa, ma aha (req, res)
//   const savedUser = await user.save();
//   res.status(201).json(savedUser);
//  } catch (error) {
//   res.status(400).json({ message: error.message });
//  }
// };

// // 4. Update user
// exports.updateUser = async (req, res) => {
//  const { id } = req.params;

//  try {
//   const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

//   if (!updatedUser) {
//    return res.status(404).json({ message: 'User not found' });
//   }
//   res.status(200).json(updatedUser);
//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }
// };


// // delet user

// exports.deleteUser = async (req, res) => {
//  const { id } = req.params;

//  try {
//   const deletedUser = await User.findByIdAndDelete(id);
//   if (!deletedUser) {
//    return res.status(404).json({ message: 'User not found' });
//   }
//   res.status(200).json(deletedUser);

//  } catch (error) {
//   res.status(500).json({ message: error.message });
//  }
// }