const User = require("../model/user"); 

const CreateUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

const GetUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(200, users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" }); // Corrected message
  }
};

module.exports = { CreateUser, GetUser };
