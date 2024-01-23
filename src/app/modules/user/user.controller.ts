import { NextFunction, Request, Response } from "express"
import { UserServises } from "./user.servises"

const creatUser = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const user = req.body.user
      const results = await UserServises.creatUserIntoDB(user)
  
      res.status(200).json({
        sucsees: true,
        massage: 'user is created sucssesfully',
        data: results,
      })
    } catch (error) {
      next(error)
    }
  }

  const getUserFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      
    
        const results = await UserServises.getAllUserDB()
    
        res.status(200).json(
           results,
        )
      } catch (error) {
        next(error)
      }
  }
  const getIsAdmFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.getIsAdminDB(email)
        const isAdmin = results.isAdmin || false;
        res.status(200).json({
          isAdmin
        })
      } catch (error) {
        next(error)
      }
  }
  const makeAUserAdminFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.makeAUserAdminInDb(email)
        
        res.status(200).json({
          sucsees: true,
        massage: 'user role updated sucssesfully',
        data: results,
        })
      } catch (error) {
        next(error)
      }
  }
  const makeAUserBanFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.makeAUserBan(email)
        
        res.status(200).json({
          sucsees: true,
        massage: 'user role updated sucssesfully',
        data: results,
        })
      } catch (error) {
        next(error)
      }
  }
  const getAUserBanFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.getIsBanInDB(email)
        
        res.status(200).json(
         results,
        )
      } catch (error) {
        next(error)
      }
  }
  const makeAUserFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.makeAUserInDB(email)
        
        res.status(200).json(
         results,
        )
      } catch (error) {
        next(error)
      }
  }
  const makeAUserProFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      const email = req.query.email as string
      const planes = req.body.plane
        const results = await UserServises.makeAUserProInDB(email,planes)
        
        res.status(200).json(
         {
          success:true,
          message:'payment updated successfully',
          data:results
         }
        )
      } catch (error) {
        next(error)
      }
  }
  const getAllProUserFromDb =async (req:Request,res:Response,next:NextFunction) => {
    try {
      
        const results = await UserServises.getAllProUserInDb()
        
        res.status(200).json(
         
          results
        
        )
      } catch (error) {
        next(error)
      }
  }

  export const UserController = {
    creatUser,
    getUserFromDb,
    getIsAdmFromDb,
    makeAUserAdminFromDb,
    makeAUserBanFromDb,
    getAUserBanFromDb,
    makeAUserFromDb,
    makeAUserProFromDb,
    getAllProUserFromDb
  }