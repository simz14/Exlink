const { createJwt } = require("../middlewares/JWTtoken");

//here i would find the user in databse to check the data, i would pass id, name and other needed data to token
const loginService = (userData) => {
  const { email, password } = userData;

  if (email === "john@gmail.com" && password === "john123") {
    const token = createJwt("john@gmail.com", "John", 1);
    return token;
  } else {
    throw new Error("Email or password is incorrect");
  }
};

module.exports = { loginService };
