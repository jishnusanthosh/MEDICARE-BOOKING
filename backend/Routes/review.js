import express from "express";

import { getAllReview, createReview } from "../Controllers/reviewController.js";

import { authenticate } from "./../auth/verifyToken.js";

import { restrict } from "./../middleware/tokenRestrict.js";

const router = express.Router({mergeParams:true});

router
  .route("/")
  .get(getAllReview)
  .post(authenticate, restrict(["patient"]), createReview);


  export default router