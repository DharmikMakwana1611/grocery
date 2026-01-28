import express from "express";
import { getCategory } from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/", getCategory);

export default router;
