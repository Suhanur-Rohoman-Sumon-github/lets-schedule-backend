import { Request, Response } from "express"
import { UserServises } from "./user.servises"

const createStudent = async (req: Request, res: Response) => {
    try {
      const user = req.body
  
      const results = await UserServises.creatUserIntoDB(user)
  
      res.status(200).json({
        sucsees: true,
        massage: 'student is created sucssesfully',
        data: results,
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
    createStudent
  }