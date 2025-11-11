import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";
import { LeadsController } from "./controllers/LeadsController.js";
const router = Router();
const leadsController = new LeadsController();
router.get("/leads", leadsController.index);
export { router };
//# sourceMappingURL=router.js.map