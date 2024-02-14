import { Schema, model } from "mongoose";
import { array } from "zod";
import { message } from "./message.interface";

const messageSchema = new Schema<message  >({
    messageId: { type: String, required: [true, "message Id is required"], unique: true },
    userName: { type: String,  },
    userEmail: { type: String,  },
    date: { type: Date, default: Date.now },
    photoUrls: { type: String },
    category: { type: String },
    subCategory:{type:String,default:'unSeen'},
    messages: [
    {
      sender: { type: String  }, 
      content: { type: String  },
      timestamp: { type: Date, default: Date.now }
    }
  ]
  });

  

  export const messageModal = model<message>("messages", messageSchema);