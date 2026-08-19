const users = [
 { id: 1, name: 'Ruweyda' },
 { id: 2, name: 'Shamsa' },

];

exports.getUsers = (req, res) => {
 res.json(users);
}