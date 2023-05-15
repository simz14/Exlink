const { loginService } = require("../services/login.service");

const loginController = {
  async checkUser(req, res) {
    try {
      const response = loginService(req.body);
      res.status(200).json({ token: response });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

module.exports = { loginController };
