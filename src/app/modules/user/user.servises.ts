import { userModel } from "./user.model"
import { user } from "./user.interface"

const creatUserIntoDB = async (user: user) => {
  const existingUser = await userModel.findOne({ email: user?.email });

  if (existingUser) {
    
    return "user already exist"
  }
    const result = await userModel.create(user)
    return result
  }
  
  const getAllUserDB = async () => {
    const result = await  userModel.find()
    return result
  }
  const getIsAdminDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isAdmin = user?.role === 'admin';
    
    return {isAdmin };
  }
 
  
  const getSingleDatafromDB = async (id: string) => {
    const result = await  userModel.findOne({ id })
    return result
  }
  
  export const UserServises = {
    creatUserIntoDB,
    getAllUserDB,
    getSingleDatafromDB,
    getIsAdminDB,
  }