import { Schema, model } from "mongoose";
import { payments } from "./payments.interface";

const paymentsSchema = new Schema<payments>({
    paymentsId: { type: String, required: [true, "schedule Id is required"], unique: true },
    userName: { type: String, required: [true, "userName is required"] },
    userEmail: { type: String, required: [true, "userEmail is required"] },
    transitionId: { type: String, required: [true, "transitionId is required"] },
    date: { type: String, required: [true, "date is required"] },
    amount: { type: Number, required: [true, "amount is required"] },
    packages: { type: String, required: [true, "packages is required"] },
  });
  
  export const paymentsModel = model<payments>("payments", paymentsSchema);
  