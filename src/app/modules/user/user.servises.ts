import { userModel } from "../user.model"
import { user } from "./user.interface"

const creatUserIntoDB = async (student: user) => {
    const result = await userModel.create(student)
    return result
  }
  
  const getAllUserDB = async () => {
    const result = await  userModel.find()
    return result
  }
  
  const getSingleDatafromDB = async (id: string) => {
    const result = await  userModel.findOne({ id })
    return result
  }
  
  export const StudentServices = {
    creatUserIntoDB,
    getAllUserDB,
    getSingleDatafromDB,
  }