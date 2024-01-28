import { z } from "zod";
const userValidationSchema = z.object({
    body:z.object({
    user:z.object({
    id: z.string().min(1).max(255),
    name: z.string().min(1).max(255),
    email: z.string(),
    photo: z.string(),
    role: z.string().min(1).max(255).optional(),
    currentPlane: z.string().min(1).max(255).optional(),
    ban: z.boolean().optional(),
    currentPackage: z.string().min(1).max(255).optional()
        })
    })
});

export default userValidationSchema