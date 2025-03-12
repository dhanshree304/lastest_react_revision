const jwt = require("jsonwebtoken");

const secretKey = "abcd12345";

const authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    
    res.status(500).json({ msg: "please login" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (decoded) {
   
      req.body.email = decoded?.email;
   
      next();
    } else {
      
      res.status(500).json({ msg: "please login" });
    }
  });
  // const decoded = jwt.verify(token, secretKey);
  // console.log(decoded); //{ user_id: '675fde7e9d51377d5d48462f', iat: 1734338181 }-->pooja1 token mdhun user_id kadhne

  // if (decoded) {
  //   req.body.user_id = decoded.user_id;

  //   console.log(req.body); //{ height: '5.7', weight: '73', user_id: '675fc5a74c1026777c112d15' }
  //   next();
  // } else {
  //   res.send("Please login");
  // }
};
module.exports = { authentication };
