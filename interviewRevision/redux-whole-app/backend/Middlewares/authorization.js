const { userModel } = require("../Models/userModel");

const authorization = async (permittedRole) => {
  return async (req, res, next) => {
    try {
      const email = req.body.email;
      const user = await userModel.find({ email });
      const role = user.role;

      if (permittedRole.includes(role)) {
        next();
      }
    } catch (error) {
      res.status(500).json({ msg: "Not Authorized" });
    }
  };
};

module.exports = { authorization };
