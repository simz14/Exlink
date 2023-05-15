const { User } = require("../models");
const getUsersService = async () => {
  try {
    const data = await User.findAll();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = { getUsersService };
