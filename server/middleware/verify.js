const jwt = require("jsonwebtoken");

const check = async (req, res, next) => {
  try {
    let token = req.headers["x-access-token"];
    if (token) {
    }
    const user = jwt.verify(token, process.env.JWT_KEY);
    if (user) {
      req.user = user;
      next();
    } else {
      res.send({ status: "errors", data: "no user" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "errors", data: error.message });
  }
};

module.exports = check;