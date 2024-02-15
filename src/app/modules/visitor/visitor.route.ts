import express from 'express'
import { visitorsController } from './vistor.controller'

const router = express.Router()
router.get("/",visitorsController.createNewVisitor)
router.get("/all-visitors",visitorsController.getVisitorData)
router.get("/todays-visitor",visitorsController.getTodaysVisitorData)

export const  VisitorRouter = router