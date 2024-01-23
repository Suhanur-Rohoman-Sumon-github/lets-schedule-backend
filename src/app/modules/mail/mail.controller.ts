import { NextFunction, Request, Response } from "express";
import { mail } from "./mail.servise";

const emailSend = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const data = req.body.emailInfo
        const results = await mail.sendEmail(data)
        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};

export const mailController = {
    emailSend
}

