

const users = [
 { id: 1, name: 'Ruweyda' },
 { id: 2, name: 'Shamsa' }
];

exports.getUsers = (req, res) => {
 res.json(users);
};

exports.getUserInfo = (req, res) => {
 const user = users.find(u => u.id == req.params.id);
 if (!user) {
  return res.status(404).json({ message: 'User not found' });
  res.json(user);
 }

