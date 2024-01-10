import { userModel } from "./user.model"
import { user } from "./user.interface"

const creatUserIntoDB = async (user: user) => {
    const result = await userModel.create(user)
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
  
  export const UserServises = {
    creatUserIntoDB,
    getAllUserDB,
    getSingleDatafromDB,
  }