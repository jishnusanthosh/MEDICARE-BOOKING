import express from "express"



import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor,getDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate } from "../auth/verifyToken.js";
import { restrict } from "../middleware/tokenRestrict.js";
import reviewRouter from '../Routes/review.js'
const router=express.Router()


router.use('/:doctorId/reviews',reviewRouter)


router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor)

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);
//router.get("appointments/my-appointments", authenticate, restrict(["doctor"]), getMyAppointment);


export default router;