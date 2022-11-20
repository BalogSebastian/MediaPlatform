import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js";
import { verifiedToken, verifyToken } from "../middleware/auth.js";

const router = express.Router();

/*  READ ( Írás ) */

router.get("/:id", verifyToken, gerUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/*  Update ( Frissités) */

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;