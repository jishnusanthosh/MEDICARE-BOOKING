import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  //get token from headers

  const authToken = req.headers.authorization;

  // check token is exists

  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .send({
        success: false,
        message: "No Token Provided,authorization denied",
      });
  }
  try {
    const token=authToken.split(" ")[1];

    //verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId=decoded.id
    req.role=decoded.role


    next();
  } catch (error) {
    if (error.name==='TokenExpiredError') {
      return res.status(401).json({message:"Token is expired"})
    }
    return res.status(401).json({success:false,message:'invalid token'})
  }
};



