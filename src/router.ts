import { Router } from "express";
import { HttpError } from "./errors/HttpError.js";
import { LeadsController } from "./controllers/LeadsController.js";

export const router = Router();

const leadsController = new LeadsController();

router.get("/leads", leadsController.index);
router.post("/leads", leadsController.create);
router.get("/leads/:id", leadsController.show);
router.put("/leads/:id", leadsController.update);
router.delete("/leads/:id", leadsController.delete);
