import express from "express"



import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor } from "../Controllers/doctorController.js";
import { authenticate } from "../auth/verifyToken.js";
import { restrict } from "../middleware/tokenRestrict.js";
import reviewRouter from '../Routes/review.js'
const router=express.Router()


router.use('/:doctorId/reviews',reviewRouter)


router.get('/:id',getSingleDoctor)
router.get('/',getAllDoctor)
router.put('/:id',authenticate,restrict(["doctor"]),updateDoctor)
router.delete('/:id',authenticate,restrict(["doctor"]),deleteDoctor)

export default router;