import { userModel } from "./user.model"
import { user } from "./user.interface"
import { GetTodaysDateInterfaceProps } from "../../GlobalInterface/dateInterface";

// create  a new user into db
const creatUserIntoDB = async (user: user) => {
  const existingUser = await userModel.findOne({ email: user?.email });

  if (existingUser) {
    throw new Error("user already exists")
  }
    const result = await userModel.create(user)
    return result
  }
  
  // handle get all user
  const getAllUserDB = async () => {
    const result = await  userModel.find()
    return result
  }
  // handle get all user
  const getTodaysAllUserDB = async ({ today }: GetTodaysDateInterfaceProps) => {
    const result = await  userModel.find({ createdAt: { $gte: today } })
    return result
  }

  // handle get is current user admin or not 
  const getIsAdminDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isAdmin = user?.role === 'admin';
    
    return {isAdmin };
  }
  const getIsModeratorInDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isModerator = user?.role === 'moderator';
    
    return isModerator;
  }
  const getIsUserInDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isUser = user?.role === 'user';
    
    return isUser;
  }

  // handle make a user as a admin
  const makeAUserAdminInDb = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"admin"  } };
    const result = await userModel.updateOne(filter, update);
    return result
   
  }

  // handle make a user ban
  const makeAUserBan = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"ban"} };
    const result = await userModel.updateOne(filter, update);
    return result
   
  }

  // get the current user ban or not 
  const getIsBanInDB = async (email:string) => {
    const user = await userModel.findOne({ email });
    const isBan = user?.role === 'ban';
    return isBan ;
  }

  // make a ban and admin as a simple user 
  const makeAUserInDB = async (email:string) => {
    const filter = { email: email }; 
    const update = { $set: { role:"user"} };
    const result = await userModel.updateOne(filter, update);
    return result
  }

  // make a user pro after payment
  const makeAUserProInDB = async (email:string,plane:string) => {
    const filter = { email: email }; 
    const update = {
      $set: { currentPlane: "pro", currentPackage: plane },
    };
    const result = await userModel.updateOne(filter, update);
    return result
  }

  // get a single user data from db
  const getSingleDatafromDB = async (id: string) => {
    const result = await  userModel.findOne({ id })
    return result
  }

  // get all the pro user who is clear there payment 
  const getAllProUserInDb = async () => {
    const result = await  userModel.find({ currentPlane:"pro" })
    return result
  }
  
  // export all the function in one object
  export const UserServises = {
    creatUserIntoDB,
    getAllUserDB,
    getSingleDatafromDB,
    getIsAdminDB,
    makeAUserAdminInDb,
    makeAUserBan,
    getIsBanInDB,
    makeAUserInDB,
    makeAUserProInDB,
    getAllProUserInDb,
    getIsModeratorInDB,
    getIsUserInDB,
    getTodaysAllUserDB
  }