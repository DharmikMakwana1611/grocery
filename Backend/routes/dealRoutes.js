import express from "express";
import { getDeal } from "../controllers/dealController.js";

const router = express.Router();

router.get("/", getDeal);

export default router;
