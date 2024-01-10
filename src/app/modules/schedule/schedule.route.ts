import express from 'express'
import { EventController } from './schedule.controller'
const router = express.Router()

router.post("/creat-event",EventController.creatNewEvent)
router.get("/get-event",EventController.Events)
router.get("/get-SingleEvents",EventController.SingleEvents)
router.delete("/delete-event",EventController.deleteSingleEvent)

export const  EventRouter = router