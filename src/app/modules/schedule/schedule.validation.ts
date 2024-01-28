import { z } from "zod";

const scheduleValidationSchema = z.object({
    scheduleId: z.string().min(1).max(255),
    eventTypes: z.string().min(1).max(255),
    eventName: z.string().min(1).max(255),
    meetLink: z.string(),
    descriptions: z.string().min(1),
    duration: z.string().min(1).max(255),
    date: z.string().min(1),
    userEmail: z.string(),
    method: z.string().min(1).max(255),
    userName: z.string().min(1).max(255),
    dateAndTime: z.string().optional().nullable()
});

export default scheduleValidationSchema