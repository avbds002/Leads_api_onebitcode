import type { Handler } from "express";
import { prisma } from "../database/index.js";
import { CreateLeadRequestSchema } from "./schemas/LeadsRequestSchema.js";

export class LeadsController {
  index: Handler = async (req, res, next) => {
    try {
      const leads = await prisma.lead.findMany();
      res.json(leads);
    } catch (error) {
      next(error);
    }
  };

  create: Handler = async (req, res, next) => {
    try {
      const body = CreateLeadRequestSchema.parse(req.body);
      const newLead = await prisma.lead.create({
        data: body,
      });
      res.status(201).json(newLead);
    } catch (error) {
      next(error);
    }
  };

  show: Handler = async (req, res, next) => {
    try {
      const lead = await prisma.lead.findUnique({
        where: {
          id: Number(req.params.id),
        },
        include: {
          groups: true,
          campaigns: true,
        },
      });
      res.json(lead);
    } catch (error) {
      next(error);
    }
  };
}
