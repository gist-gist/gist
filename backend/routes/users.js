const router = require("express").Router();
const bcrypt = require("bcrypt");

let User = require("../models/user.model");

/**
 * test route to make sure server is running
 */
router.route("/test").get((req, res) => {
  res.json("/users/test");
});

/**
 * returns all users in the db
 */
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error :" + err));
});

/**
 * adds new user to the db
 */
router.route("/").post((req, res) => {
  const BCRYPT_SALT_ROUND = 12;

  const username = req.body.username;
  const password_plaintext = req.body.password;
  const fullName = req.body.fullName;
  const email = req.body.email;

  bcrypt.hash(password_plaintext, BCRYPT_SALT_ROUND).then(password => {
    const newUser = new User({ username, password, fullName, email });
    return newUser
      .save()
      .then(newUser => res.json(newUser))
      .catch(err => res.status(400).json("Error: " + err));
  });
});

/**
 * deletes user from db
 */
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/getUser").post(async (req, res) => {
  const username = req.body.username;
  let user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).send({ message: "the user does not exist" });
  }
  return res.json(user);
});

/**
 * checks user credentials to log in
 */
router.route("/login").post(async (req, res) => {
  const username = req.body.username;
  const password_plaintext = req.body.password;

  const BCRYPT_SALT_ROUND = 12;

  let user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).send({ message: "the username does not exist" });
  }

  if (!bcrypt.compareSync(password_plaintext, user.password)) {
    return res.status(400).send({ message: "the password is invalid" });
  }
  res.send({ message: "the username and password is correct" });
});

module.exports = router;
