import { Router } from "express";
import experienceController from "../controllers/experienceController";

const router = Router();

router.get('/experiences',experienceController);

export default router;