import { NextFunction, Request, Response } from "express";
import { scheduler } from "./schedule.servise";
const creatNewEvent = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const event = req.body.event;
        const results = await scheduler.creatEventInDb(event);
        res.status(200).json({
            sucsees: true,
            massage: 'event is created successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};

const Events = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const userEmail: string = req.query.email as string;

        if (!userEmail) {
            return res.status(400).json({ error: "Email is required in the query parameters" });
        }

        const results = await scheduler.getEventsFromDB(userEmail);
        
        res.status(200).json(results);
    } catch (error) {
        next(error)
    }
};
const AllEvents = async (req: Request, res: Response,next:NextFunction) => {
    try {

        const results = await scheduler.getAllEventsFromDB();
        res.status(200).json(results);
    } catch (error) {
        next(error)
    }
};
const SingleEvents = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const id: string = req.query.id as string;
        const results = await scheduler.getSingleEventsFromDB(id);
        
        res.status(200).json(results);
    } catch (error) {
        next(error)
    }
};
const deleteSingleEvent = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const id: string = req.query.id as string;
        
        const results = await scheduler.deleteSingleEventFromDB(id);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is deleted successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};
const updateDateAndTime = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const id: string = req.query.id as string;
        const date = req.body.date.dateAndTime
        const results = await scheduler.updateDateAndTimeInMongoDB(id,date);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};
const getSingleDateAndTimeFromDb = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const date: string = req.query.date as string;
        
        const results = await scheduler.getSpecificDateDataInDb(date);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is updated successfully',
            data: results,
        });
    } catch (error) {
        next(error)
    }
};



export const EventController = {
    creatNewEvent,
    Events ,
    deleteSingleEvent ,
    SingleEvents,
    updateDateAndTime,
    
    AllEvents,
    getSingleDateAndTimeFromDb,
    
};
