

const users = [
 { id: 1, name: 'Ruweyda' },
 { id: 2, name: 'Shamsa' }
];

exports.getUsers = (req, res) => {
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
