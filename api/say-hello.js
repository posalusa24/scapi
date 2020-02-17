module.exports = (req, res) => {
  const { name = 'Guys!' } = req.query;
  res.status(200).send(`Hello ${name}!`);
}
