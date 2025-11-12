import * as z from "zod";
export declare const CreateLeadRequestSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        New: "New";
        Contacted: "Contacted";
        Qualified: "Qualified";
        Converted: "Converted";
        Unresponsive: "Unresponsive";
        Disqualified: "Disqualified";
        Archived: "Archived";
    }>>;
}, z.core.$strip>;
export declare const UpdateLeadRequestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        New: "New";
        Contacted: "Contacted";
        Qualified: "Qualified";
        Converted: "Converted";
        Unresponsive: "Unresponsive";
        Disqualified: "Disqualified";
        Archived: "Archived";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=LeadsRequestSchema.d.ts.map