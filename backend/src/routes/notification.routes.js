import { Router } from "express";
import { verifyAdmin, verifyUser,verifySeller } from "../middlewares/auth.middleware.js";
// import { addBidOnItem,getWinnerOfAuction, getBidsByUser } from "../controllers/bid.controller.js";



const router = Router();

// router.route("/register").post(registerUser);
// router.route("/:id/winner").get( getWinnerOfAuction);
// router.route("/get-all-bids-items").get(verifyUser, getBidsByUser);
// router.route("/:id").post(verifyUser, addBidOnItem );







export default router;
