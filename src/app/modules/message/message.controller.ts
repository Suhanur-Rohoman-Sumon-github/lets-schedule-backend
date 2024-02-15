import httpStatus from "http-status";
import catchAsync from "../../../utils/cathAsync";
import sendResponse from "../../../utils/sendRespons";
import { messagesData } from "./message.services";


const saveMessageDataInDatabase  = catchAsync( async (req, res) => {
    const messages = req.body.messages
    const results = await messagesData.saveMessageInDb(messages);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"message data saved successfully ",
        data:results
    })})

    const getSingleMessageDataFromDb = catchAsync(async (req, res) => { 
        const email:  string = req.query.emails as string;
        const results = await messagesData.getSingleMessageDataInDb(email);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"single message data received successfully ",
            data:results
        })})
    const updateMessageDataFromDb = catchAsync(async (req, res) => { 
        const email:  string = req.query.emails as string;
        const newMessage = req.body.newMessage
        const subcategory = req.body.subcategory
        
        const results = await messagesData.updateSingleMessageDataInDb(email,newMessage,subcategory);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"new message added successfully ",
            data:results
        })})
    const GetAllMessageDataFromDb = catchAsync(async (req, res) => { 
       
        const results = await messagesData.GetAllMessageDataInDb();
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"new message added successfully ",
            data:results
        })})
    const GetSubCategoryMessageDataFromDb = catchAsync(async (req, res) => { 
        const subCategory:  string = req.query.subCategory as string;
        const results = await messagesData.GetSubCategoryMessageDataInDb(subCategory);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"new message added successfully ",
            data:results
        })})
    const GetSubCategoryTodaysMessageDataFromDb = catchAsync(async (req, res) => { 
        const subCategory:  string = req.query.subCategory as string;
        const today = new Date(); // Get today's date
        today.setHours(0, 0, 0, 0);
        const results = await messagesData.GetSubCategoryTodaysMessageDataInDb(subCategory,today);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"new message added successfully ",
            data:results
        })})
    const GetSpecificMessageDataFromDb = catchAsync(async (req, res) => { 
        const email:  string = req.query.emails as string;
        const results = await messagesData.getSpecificMessageDataInDb(email);
        sendResponse(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:"new message added successfully ",
            data:results
        })})

    export const messageController = {
        saveMessageDataInDatabase ,
        getSingleMessageDataFromDb,
        updateMessageDataFromDb,
        GetAllMessageDataFromDb,
        GetSpecificMessageDataFromDb,
        GetSubCategoryMessageDataFromDb
    }