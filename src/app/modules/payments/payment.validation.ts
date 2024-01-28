import { z } from "zod";

const paymentsValidationSchema = z.object({
    paymentsId: z.string().min(1).max(255),
    userName: z.string().min(1).max(255),
    userEmail: z.string().email(),
    transitionId: z.string().min(1).max(255),
    date: z.string().min(1),
    amount: z.number().positive(),
    packages: z.string().min(1).max(255).default("free")
});

export default paymentsValidationSchema