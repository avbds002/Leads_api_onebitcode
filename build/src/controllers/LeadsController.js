// import { CreateLeadRequestSchema } from "./schemas/LeadsRequestSchema";
import { HttpError } from "../errors/HttpError.js";
import { prisma } from "../database/index.js";
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
}
//# sourceMappingURL=LeadsController.js.map