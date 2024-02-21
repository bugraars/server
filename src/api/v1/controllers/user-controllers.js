const User = require("../models/user-model.js");

const userControllers = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: "Cannot find user" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find({}, { password: 0, __v: 0 });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  addUser: async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      branchDir: req.body.branchDir,
      password: req.body.password,
      role: req.body.role,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  editUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: "Cannot find user" });
      }

      if (req.body.name != null) {
        user.name = req.body.name;
      }
      if (req.body.email != null) {
        user.email = req.body.email;
      }
      if (req.body.password != null) {
        user.password = req.body.password;
      }
      if (req.body.role != null) {
        user.role = req.body.role;
      }

      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      console.error("UserController update error:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: "Cannot find user" });
      }
      await User.deleteOne(user);
      res.json({ message: "Deleted User", user: user});
    } catch (error) {
      console.error("UserController delete error:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};

module.exports = { userControllers };
