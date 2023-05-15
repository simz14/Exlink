const { User } = require("../models");
const getUsersService = async () => {
  try {
    const data = await User.findAll();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addUserService = async (body) => {
  const { name, email, phone, address, date } = body;

  try {
    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
      address: address,
      date: date,
    });
    return newUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { addUserService, getUsersService };
