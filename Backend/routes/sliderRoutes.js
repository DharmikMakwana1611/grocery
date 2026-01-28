import express from "express";
import { getSlider } from "../controllers/sliderControllers.js";

const router = express.Router();

router.get("/", getSlider);

export default router;
