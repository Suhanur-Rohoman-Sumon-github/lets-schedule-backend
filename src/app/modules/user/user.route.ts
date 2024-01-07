import express from 'express'
import { UserController } from './user.controller'


const router = express.Router()

router.post('/creat-user', UserController.creatUser)
router.get("/all-user",UserController.getUserFromDb)

export const UserRouter = router
