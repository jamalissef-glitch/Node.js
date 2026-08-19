

const users = [
 { id: 1, name: 'Post1' },
 { id: 2, name: 'Post2' }
];

exports.getPosts = (req, res) => {
 res.json(posts);
};

exports.getUserInfo = (req, res) => {
 const user = users.find(u => u.id == req.params.id)
 if (!user)
  return res.status(404).send('User not found');
 res.json(user);

}
