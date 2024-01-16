import { Request, Response } from "express"
import { UserServises } from "./user.servises"

const creatUser = async (req: Request, res: Response) => {
    try {
      const user = req.body.user
      const results = await UserServises.creatUserIntoDB(user)
  
      res.status(200).json({
        sucsees: true,
        massage: 'user is created sucssesfully',
        data: results,
      })
    } catch (error) {
      res.status(500).json({
        sucsees: false,
        massage: 'something went wrong',
        data: error,
      })
    }
  }

  const getUserFromDb =async (req:Request,res:Response) => {
    try {
      
    
        const results = await UserServises.getAllUserDB()
    
        res.status(200).json(
           results,
        )
      } catch (error) {
        res.status(500).json({
          sucsees: false,
          massage: 'sothing went wrong',
          data: error,
        })
      }
  }
  const getIsAdmFromDb =async (req:Request,res:Response) => {
    try {
      const email = req.query.email as string
        const results = await UserServises.getIsAdminDB(email)
        const isAdmin = results.isAdmin || false;
        res.status(200).json({
          isAdmin
        })
      } catch (error) {
        res.status(500).json({
          sucsees: false,
          massage: 'sothing went wrong',
          data: error,
        })
      }
  }

  export const UserController = {
    creatUser,
    getUserFromDb,
    getIsAdmFromDb
  }