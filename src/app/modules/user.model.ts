import { Schema, model } from "mongoose";
import { user } from "./user/user.interface";

const userSchema = new Schema<user>({
    id: { type: Number,unique:true,required:[true,"id is required"] },
    name:{type:String,required:[true,"Name is required"],},
    email:{type:String,required:[true,"Email is required"]},
    photo:{type:String,required:[true,"Photo is required"]}
})

export const userModel = model<user>("user",userSchema)