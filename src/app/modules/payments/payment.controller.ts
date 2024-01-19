import { Request, Response } from "express";
import { payments } from "./payment.servise";

const createPaymentIntentFromDb = async (req: Request, res: Response) => {
    try {
        const {price} = req.body
        
        const results = await payments.createPaymentIntentInDb(price);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const savePaymentsDataInDatabase = async (req: Request, res: Response) => {
    try {
        const paymentsData = req.body.paymentsData
       
        
        const results = await payments.savePaymentsDataInDb(paymentsData);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const getSinglePaymentsDataFromDb = async (req: Request, res: Response) => {
    try {
        const paymentsIds:  string = req.query.paymentsId as string;
        
        const results = await payments.getSinglePaymentsDataInDb(paymentsIds);
        
        res.status(200).json({
            sucsees: true,
            massage: 'payment single data received successfully',
            data: results,
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const getAllPaymentFromDb = async (req: Request, res: Response) => {
    try {
        const results = await payments.getAllPaymentInDb();
        
        res.status(200).json(
             results
        );
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const paymentsControllers = {
    createPaymentIntentFromDb,
    savePaymentsDataInDatabase,
    getAllPaymentFromDb,
    getSinglePaymentsDataFromDb
}