import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { sampleController } from "../controllers/protected";

// sample route - just put the verify middleware before any route here for JWT validation.
router.get('/', verify, sampleController)

export default router