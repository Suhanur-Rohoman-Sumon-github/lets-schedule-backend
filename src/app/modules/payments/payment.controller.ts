import { NextFunction, Request, Response } from "express";
import { payments } from "./payment.servise";

const createPaymentIntentFromDb = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const {price} = req.body
        
        const results = await payments.createPaymentIntentInDb(price);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
       next(error)
    }
};
const savePaymentsDataInDatabase = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const paymentsData = req.body.paymentsData
       
        
        const results = await payments.savePaymentsDataInDb(paymentsData);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};
const getSinglePaymentsDataFromDb = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const paymentsIds:  string = req.query.paymentsId as string;
        
        const results = await payments.getSinglePaymentsDataInDb(paymentsIds);
        
        res.status(200).json({
            sucsees: true,
            massage: 'payment single data received successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};
const getAllPaymentFromDb = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const results = await payments.getAllPaymentInDb();
        
        res.status(200).json(
             results
        );
    } catch (error) {
        next(error)
    }
};

export const paymentsControllers = {
    createPaymentIntentFromDb,
    savePaymentsDataInDatabase,
    getAllPaymentFromDb,
    getSinglePaymentsDataFromDb
}