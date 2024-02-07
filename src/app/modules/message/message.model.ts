import { Schema, model } from "mongoose";
import { array } from "zod";
import { message } from "./message.interface";

const messageSchema = new Schema<message  >({
    messageId: { type: String, required: [true, "message Id is required"], unique: true },
    userName: { type: String, required: [true, "userName is required"] },
    userEmail: { type: String, required: [true, "userEmail is required"] },
    date: { type: Date, default: Date.now },
    photoUrls: { type: String, required: [true, "photo is required"] },
    messages: [
    {
      sender: { type: String, required: true }, 
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ]
  });

  

  export const messageModal = model<message>("messages", messageSchema);