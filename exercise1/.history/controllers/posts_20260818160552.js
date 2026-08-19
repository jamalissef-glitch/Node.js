

const users = [
 { id: 1, name: 'Post1' },
 { id: 2, name: 'Post2' }
];

exports.getPosts = (req, res) => {
 res.json(posts);
};

exports.getPostInfo = (req, res) => {
 const post = posts.find(u => u.id == req.params.id)
 if (!post)
  return res.status(404).send('User not found');
 res.json(post);

}

