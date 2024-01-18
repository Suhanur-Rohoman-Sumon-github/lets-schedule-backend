import { Request, Response } from "express";
import { mail } from "./mail.servise";

const emailSend = async (req: Request, res: Response) => {
    try {
        const data = req.body.emailInfo
        const results = await mail.sendEmail(data)
        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            data: results,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const mailController = {
    emailSend
}

