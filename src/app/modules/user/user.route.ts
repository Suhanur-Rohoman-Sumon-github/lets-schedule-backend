import express from 'express'
import { UserController } from './user.controller'


const router = express.Router()

router.post('/creat-user', UserController.creatUser)
router.get("/all-user",UserController.getUserFromDb)
router.get("/get-isAdmin",UserController.getIsAdmFromDb)

export const UserRouter = router
