import { Model } from "mongoose"

export type user={
    id:string
    name:string,
    email:string,
    photo:string,
    role:string,
    currentPlane:string,
    ban:boolean,
    currentPackage:string,
    createdAt:Date
}

