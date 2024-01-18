import express from 'express'
import { UserController } from './user.controller'


const router = express.Router()

router.post('/creat-user', UserController.creatUser)
router.patch('/change-user-plane', UserController.makeAUserProFromDb)
router.get('/make-admin', UserController.makeAUserAdminFromDb)
router.get('/make-ban', UserController.makeAUserBanFromDb)
router.get('/make-user', UserController.makeAUserFromDb)
router.get("/all-user",UserController.getUserFromDb)
router.get("/get-isAdmin",UserController.getIsAdmFromDb)
router.get("/get-isBan",UserController.getAUserBanFromDb)


export const UserRouter = router
