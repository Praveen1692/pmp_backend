import { Router } from "express";
import { healthCheak } from "../controllers/health.controller.js";
const router = Router();

router.route("/").get( healthCheak);

export default router;
