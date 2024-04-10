import express from "express";
// import {  } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
import { addVideo, addViews, getByTag, getVideo, random, search, sub, trend } from "../controllers/video.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addViews)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub", verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)
export default router;