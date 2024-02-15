
import { payments } from "./payment.servise";
import sendResponse from "../../../utils/sendRespons";
import httpStatus from "http-status";
import catchAsync from "../../../utils/cathAsync";

const createPaymentIntentFromDb  = catchAsync(async (req, res) => {
        const {price} = req.body
        const prices =  price.toFixed(2) 
        const results = await payments.createPaymentIntentInDb(prices);      
        sendResponse(res,{
            statusCode:  httpStatus.OK,
            success:true,
            message:"new payment intent added",
            data:results
        })   
    });

const savePaymentsDataInDatabase  = catchAsync( async (req, res) => {
        const paymentsData = req.body.paymentsData
        
        const results = await payments.savePaymentsDataInDb(paymentsData);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"payment data saved successfully ",
            data:results
        })})

const getSinglePaymentsDataFromDb = catchAsync(async (req, res) => { 
        const paymentsIds:  string = req.query.paymentsId as string;
        const results = await payments.getSinglePaymentsDataInDb(paymentsIds);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"single payments data received successfully ",
            data:results
        })})
    
const getAllPaymentFromDb = catchAsync(async (req, res) => {
        const results = await payments.getAllPaymentInDb();
        res.status(httpStatus.OK).json(
        results
    );
})
const getTodaysAllPaymentFromDb = catchAsync(async (req, res) => {
    const today= new Date(); 
    today.setHours(0, 0, 0, 0);
        const results = await payments.getTodaysAllPaymentInDb({today});
        res.status(httpStatus.OK).json(
        results
    );
})

export const paymentsControllers = {
    createPaymentIntentFromDb,
    savePaymentsDataInDatabase,
    getAllPaymentFromDb,
    getSinglePaymentsDataFromDb,
    getTodaysAllPaymentFromDb
}