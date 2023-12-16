import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const restrict = roles => async(req,res,next)=>{

    const userId=req.userId
    let user;
  
    const patient=await User.findById(userId)
    const doctor=await Doctor.findById(userId)
  
    if (patient) {
      user=patient
    }
    if(doctor){
      user=doctor
    }
  
    if(!roles.includes(user.role)){
      return res.status(401).json({success:false,message:"You're not authorized"})
    }
  
    next();
  }