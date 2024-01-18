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
  const makeAUserAdminInDb = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"admin"  } };
    const result = await userModel.updateOne(filter, update);
    return result
   
  }
  const makeAUserBan = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"ban"} };
    const result = await userModel.updateOne(filter, update);
    return result
   
  }
  const getIsBanInDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isBan = user?.role === 'ban';
    return isBan ;
  }
  const makeAUserInDB = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"user"} };
    const result = await userModel.updateOne(filter, update);
    return result
  }
  const makeAUserProInDB = async (email:string,plane:string) => {
    const filter = { email: email }; 
    const update = {
      $set: { currentPlane: "pro", currentPackage: plane },
    };
    const result = await userModel.updateOne(filter, update);
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
    getIsAdminDB,
    makeAUserAdminInDb,
    makeAUserBan,
    getIsBanInDB,
    makeAUserInDB,
    makeAUserProInDB
  }