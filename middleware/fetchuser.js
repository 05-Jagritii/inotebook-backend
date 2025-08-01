const jwt = require("jsonwebtoken");
const JWT_SECRET = "#Jagritiisagoodgirl";

const fetchuser = (req, res, next) => {
  // get user from jwt token and add id to requested object
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
