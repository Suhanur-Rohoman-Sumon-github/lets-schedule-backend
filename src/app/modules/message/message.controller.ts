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
        const results = await messagesData.updateSingleMessageDataInDb(email,newMessage);
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
        GetSpecificMessageDataFromDb
    }