import { Request, Response } from "express";
import { scheduler } from "./schedule.servise";

const creatNewEvent = async (req: Request, res: Response) => {
    try {
        const event = req.body.event;
        const results = await scheduler.creatEventInDb(event);
        res.status(200).json({
            sucsees: true,
            massage: 'event is created successfully',
            data: results,
        });
    } catch (error) {
        res.status(500).json({
            sucsees: false,
            massage: 'something is broken',
            data: error,
        });
    }
};

const Events = async (req: Request, res: Response) => {
    try {
        const userEmail: string = req.query.email as string;

        if (!userEmail) {
            return res.status(400).json({ error: "Email is required in the query parameters" });
        }

        const results = await scheduler.getEventsFromDB(userEmail);
        
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const SingleEvents = async (req: Request, res: Response) => {
    try {
        const id: string = req.query.id as string;
        const results = await scheduler.getSingleEventsFromDB(id);
        
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
const deleteSingleEvent = async (req: Request, res: Response) => {
    try {
        const id: string = req.query.id as string;
        
        const results = await scheduler.deleteSingleEventFromDB(id);
        
        res.status(200).json({
            sucsees: true,
            massage: 'event is deleted successfully',
            data: results,
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export const EventController = {
    creatNewEvent,
    Events ,
    deleteSingleEvent ,
    SingleEvents
};
