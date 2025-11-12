import { prisma } from "../database/index.js";
import { CreateLeadRequestSchema, UpdateLeadRequestSchema, } from "./schemas/LeadsRequestSchema.js";
import { HttpError } from "../errors/HttpError.js";
export class LeadsController {
    index = async (req, res, next) => {
        try {
            const leads = await prisma.lead.findMany();
            res.json(leads);
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const body = CreateLeadRequestSchema.parse(req.body);
            const newLead = await prisma.lead.create({
                data: body,
            });
            res.status(201).json(newLead);
        }
        catch (error) {
            next(error);
        }
    };
    show = async (req, res, next) => {
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
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            const body = UpdateLeadRequestSchema.parse(req.body);
            const newLead = await prisma.lead.create({
                data: body,
            });
            res.status(201).json(newLead);
        }
        catch (error) {
            next(error);
        }
    };
    delete = async (req, res, next) => {
        try {
            const id = Number(req.params.id);
            const leadExists = await prisma.lead.findUnique({ where: { id } });
            if (!leadExists)
                throw new HttpError(404, "lead não encontrado");
            const deletedLead = await prisma.lead.delete({ where: { id } });
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=LeadsController.js.map