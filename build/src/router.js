import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";
import { LeadsController } from "./controllers/LeadsController.js";
export const router = Router();
const leadsController = new LeadsController();
router.get("/leads", leadsController.index);
//# sourceMappingURL=router.js.map