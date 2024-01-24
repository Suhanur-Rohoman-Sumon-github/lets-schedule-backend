import { NextFunction, Request, RequestHandler, Response } from "express";
import { mail } from "./mail.servise";
import catchAsync from "../../../utils/cathAsync";
import sendResponse from "../../../utils/sendRespons";
import httpStatus from "http-status";

const emailSend  = catchAsync(async (req, res) => {
    const data = req.body.emailInfo
    const results = await mail.sendEmail(data)
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:`event email send successfully` ,
        data:results
        }) ;
}) ;

export const mailController = {
    emailSend
}

