const { userModel } = require("../Models/userModel");

const authorization = (permittedRole) => {
  return async (req, res, next) => {
    //console.log(req.body.name)
    const email = req.body.email;
    const user = await userModel.findOne({ email: email }); //ya email cha comp {}
   
    const role = user.role;
    if (permittedRole.includes(role)) {
      next();
    } else {
     
       res.status(500).json({ msg: "Not Authorised" });
    }
  };
};

module.exports={authorization}