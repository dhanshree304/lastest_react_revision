const jwt = require("jsonwebtoken");

const secretKey = "abcde@123";

  const authentication = async (req, res, next) => {
    try {
      const token = await req.headers?.authorization?.token.split("")[1];
      if (!token) {
        res.status(500).json({ msg: "Login again token is not available" });
      }

      const decoded = jwt.verify({ email }, secretKey);
      req.body.email = decoded.email;
      next();
    } catch (e) {
      res.status(500).json({ msg: "Something went wrong" });
    }
} 

module.exports = { authentication };
