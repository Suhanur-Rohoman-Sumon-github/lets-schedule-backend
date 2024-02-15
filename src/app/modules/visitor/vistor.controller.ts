import httpStatus from "http-status";
import catchAsync from "../../../utils/cathAsync";
import sendResponse from "../../../utils/sendRespons";
import { visitorServices } from "./visitor.servises";

const createNewVisitor = catchAsync(async (req, res) => {
    const ip = req.ip;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const results = await visitorServices.createVisitorInDb(ip,todayStart);
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"new event created successfully",
        data:results
        }) 
});
const getVisitorData = catchAsync(async (req, res) => {
    
    const results = await visitorServices.getVisitorsFromDB();
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"new event created successfully",
        data:results
        }) 
});

const getTodaysVisitorData = catchAsync(async (req, res) => {
    const today= new Date(); // Get today's date
    today.setHours(0, 0, 0, 0);
    const results = await visitorServices.getTodaysVisitorsFromDB({today});
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"new event created successfully",
        data:results
        }) 
});

export const visitorsController = {
    createNewVisitor,
    getVisitorData,
    getTodaysVisitorData
}