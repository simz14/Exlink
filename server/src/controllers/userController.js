const { addUserService, getUsersService } = require("../services/user.service");

const userController = {
  async getUsers(req, res) {
    try {
      const data = await getUsersService(req.body);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async addUser(req, res) {
    try {
      const response = await addUserService(req.body);
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { userController };
