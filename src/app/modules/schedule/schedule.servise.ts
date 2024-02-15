
import { ScheduleModel } from "./schedule.model";
import {  schedule } from "./schedul.interface";
import dotenv from 'dotenv'
import { GetTodaysDateInterfaceProps } from "../../GlobalInterface/dateInterface";
dotenv.config()
const creatEventInDb =async (event:schedule) => {
    const result = await ScheduleModel.create(event)
    return result
}
const getEventsFromDB = async (email: string) => {
    const result = await ScheduleModel.find({ userEmail: email });
    return result;
};
const getAllEventsFromDB = async () => {
    const result = await ScheduleModel.find();
    return result;
};
const getTodaysAllEventsFromDB = async ({ today }: GetTodaysDateInterfaceProps) => {
    const result = await ScheduleModel.find({ createdAt: { $gte: today } });
    
    return result;
};
const getSingleEventsFromDB = async (id: string) => {
    const result = await ScheduleModel.findOne({ scheduleId: id });
    return result;
};
const deleteSingleEventFromDB = async (id: string) => {
    const result = await ScheduleModel.deleteOne({ scheduleId: id });
    return result;
};
const updateDateAndTimeInMongoDB = async (id: string,date:string) => {
    const filter = { scheduleId: id }; 
    const update = { $set: { dateAndTime:date  } };
    const result = await ScheduleModel.updateOne(filter, update);
    return result
};
const getSpecificDateDataInDb = async (date: string) => {
   
    const scheduleDate = date;
    console.log(date);
    const result = await ScheduleModel.findOne({ dateAndTime: scheduleDate });
  
    return result;
};




export const scheduler = {
    creatEventInDb,
    getEventsFromDB,
    deleteSingleEventFromDB,
    getSingleEventsFromDB,
    updateDateAndTimeInMongoDB,
    getAllEventsFromDB,
    getSpecificDateDataInDb,  
    getTodaysAllEventsFromDB
}