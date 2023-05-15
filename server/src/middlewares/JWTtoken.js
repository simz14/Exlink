const jwt = require("jsonwebtoken");

const createJwt = (email, name, id) => {
  let payload = {
    id: id,
    email: email,
    name: name,
  };
  return jwt.sign(payload, process.env.SECRET_KEY);
};

module.exports = { createJwt };
