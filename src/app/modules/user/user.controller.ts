import { NextFunction, Request, Response } from "express"
import { UserServises } from "./user.servises"
import sendResponse from "../../../utils/sendRespons"
import httpStatus from "http-status"
import catchAsync from "../../../utils/cathAsync"

const creatUser = catchAsync(async (req,res) => {
  const user = req.body.user
  const results = await UserServises.creatUserIntoDB(user)
  sendResponse(res,{
      statusCode:  httpStatus.OK,
      success:true,
      message:"new user created  successfully",
      data:results
    })
})

const getUserFromDb =catchAsync(async (req, res) => {
  const results = await UserServises.getAllUserDB()
    res.status(httpStatus.OK).json(
       results
    ) 
})

const getIsAdmFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.getIsAdminDB(email)
  const isAdmin = results.isAdmin || false;
      res.status(httpStatus.OK).json({
        isAdmin
      })   
})
const getIsModeratorFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.getIsModeratorInDB(email)
  const isModerator = results || false;
      res.status(httpStatus.OK).json({
        isModerator
      })   
})
const getIsUserFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.getIsUserInDB(email)
  const isUser = results || false;
      res.status(httpStatus.OK).json({
        isUser
      })   
})

const makeAUserAdminFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.makeAUserAdminInDb(email)
    sendResponse(res,{
      statusCode:  httpStatus.OK,
      success:true,
      message:`make this ${email} admin successfully`,
      data:results
      })
    
})

const makeAUserBanFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.makeAUserBan(email)
    sendResponse(res,{
      statusCode:  httpStatus.OK,
      success:true,
      message:`this user ${email}  ban  successfully` ,
      data:results
      })  
})

const getAUserBanFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.getIsBanInDB(email)
    res.status(httpStatus.OK).json(
       results
      ) 
})

const makeAUserFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const results = await UserServises.makeAUserInDB(email)
    res.status(200).json(
     results
    ) 
})

const makeAUserProFromDb =catchAsync(async (req, res) => {
  const email = req.query.email as string
  const planes = req.body.plane
  const results = await UserServises.makeAUserProInDB(email,planes)     
    sendResponse(res,{
      statusCode:  httpStatus.OK,
      success:true,
      message:`this user ${email} make pro successfully` ,
      data:results
      })    
})

const getAllProUserFromDb =catchAsync(async (req, res) => {   
  const results = await UserServises.getAllProUserInDb()
    res.status(200).json( 
      results      
      ) 
  })

  export const UserController = {
    creatUser,
    getUserFromDb,
    getIsAdmFromDb,
    makeAUserAdminFromDb,
    makeAUserBanFromDb,
    getAUserBanFromDb,
    makeAUserFromDb,
    makeAUserProFromDb,
    getAllProUserFromDb,
    getIsModeratorFromDb,
    getIsUserFromDb
  }