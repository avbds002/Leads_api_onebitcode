import type { Handler } from "express";
import { prisma } from "../database/index.js";
// import { CreateLeadRequestSchema } from "./schemas/LeadsRequestSchema";
import { HttpError } from "../errors/HttpError.js";

export class LeadsController {
  index: Handler = async (req, res, next) => {
    try {
      const leads = await prisma.lead.findMany();
      res.json(leads);
    } catch (error) {
      next(error);
    }
  };
}
