import express from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../../middleware/validateRequest'
import userValidationSchema from './user.validation'


const router = express.Router()

// validate the data user is giving is right withe zod validations
router.post('/create-user',validateRequest(userValidationSchema),  UserController.creatUser)
router.patch('/change-user-plane', UserController.makeAUserProFromDb)
router.get('/make-admin', UserController.makeAUserAdminFromDb)
router.get('/make-ban', UserController.makeAUserBanFromDb) 
router.get('/make-user', UserController.makeAUserFromDb)
router.get("/all-user",UserController.getUserFromDb)
router.get("/get-isAdmin",UserController.getIsAdmFromDb)
router.get("/get-isModerator",UserController.getIsModeratorFromDb)
router.get("/get-isUser",UserController.getIsUserFromDb)
router.get("/get-isBan",UserController.getAUserBanFromDb)
router.get("/get-all-pro-user",UserController.getAllProUserFromDb)


export const UserRouter = router
