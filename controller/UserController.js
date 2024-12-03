const User = require("../model/user"); 

const CreateUser = async (req, res) => {
  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password,
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
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error, unable to find user" });
  }
};

const UpdateUserDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDetails = req.body;

    const user = await User.findByIdAndUpdate(id, updatedDetails, {
      new: true,
      runValidators: true, 
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error, unable to update user" });
  }
};

const DeleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error, unable to delete user" });
  }
};

module.exports = { CreateUser, GetUser, GetUserById, UpdateUserDetails, DeleteUserById };