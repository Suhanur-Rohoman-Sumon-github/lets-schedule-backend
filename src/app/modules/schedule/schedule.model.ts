import {  model, Schema } from "mongoose";
import {  schedule } from "./schedul.interface";

const ScheduleSchema = new Schema<schedule>({
  scheduleId: { type: String, required: [true, "schedule Id is required"], unique: true },
  eventTypes: { type: String, required: [true, "eventTypes is required"] },
  eventName: { type: String, required: [true, "eventName is required"] },
  meetLink: { type: String, required: [true, "meetLink is required"] },
  descriptions: { type: String, required: [true, "descriptions is required"] },
  duretion: { type: String, required: [true, "duretion is required"] },
  date: { type: String, required: [true, "date is required"] },
  userEmail: { type: String, required: [true, "user Email is required"] },
  method: { type: String, required: [true, "method is required"] },
});

export const ScheduleModel = model<schedule>("schedule", ScheduleSchema);
