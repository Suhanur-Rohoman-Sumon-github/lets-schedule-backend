import { NextFunction, Request, Response } from "express";
import { scheduler } from "./schedule.servise";
import catchAsync from "../../../utils/cathAsync";
import sendResponse from "../../../utils/sendRespons";
import httpStatus from "http-status";

// create new events
const creatNewEvent = catchAsync(async (req, res) => {
    const event = req.body.event;
    const results = await scheduler.creatEventInDb(event);
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"new event created successfully",
        data:results
        }) 
});

// get specific  users all schedule 
const Events = catchAsync(async (req, res) => {
    const userEmail: string = req.query.email as string;
    if (!userEmail) {
        return res.status(400).json({ error: "Email is required in the query parameters" });
    }
    const results = await scheduler.getEventsFromDB(userEmail);
    res.status(200).json(results); 
})

// get all the event already have been created yet
const AllEvents = catchAsync(async (req, res) => {
    const results = await scheduler.getAllEventsFromDB();
    res.status(200).json(results)})
;

// get single events withe event id 
const SingleEvents =catchAsync( async (req, res) => {
    const id: string = req.query.id as string;
    const results = await scheduler.getSingleEventsFromDB(id);
    res.status(200).json(results);
});

// delete a single event withe event id 
const deleteSingleEvent = catchAsync(async (req, res) => {
    const id: string = req.query.id as string;
    const results = await scheduler.deleteSingleEventFromDB(id);
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"event deleted successfully",
        data:results
        })   
});

// update date and time which is user already  selected yet 
const updateDateAndTime = catchAsync(async (req, res) => {
    const id: string = req.query.id as string;
    const date = req.body.date.dateAndTime
    const results = await scheduler.updateDateAndTimeInMongoDB(id,date);
    sendResponse(res,{
        statusCode:  httpStatus.OK,
        success:true,
        message:"date and time added  successfully",
        data:results
        }); 
});

// get single date and time only the date and time 
const getSingleDateAndTimeFromDb = catchAsync(async (req, res) => { 
    const date: string = req.query.date as string;      
    const results = await scheduler.getSpecificDateDataInDb(date);      
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"single date and time get  successfully",
        data:results
        });   
});

// send all the function as a object to receive in the event route 
export const EventController = {
    creatNewEvent,
    Events ,
    deleteSingleEvent ,
    SingleEvents,
    updateDateAndTime,
    AllEvents,
    getSingleDateAndTimeFromDb,
    
};
