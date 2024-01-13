import express from 'express'
import { EventController } from './schedule.controller'
const router = express.Router()

router.post("/creat-event",EventController.creatNewEvent)
router.get("/get-event",EventController.Events)
router.get("/get-SingleEvents",EventController.SingleEvents)
router.delete("/delete-event",EventController.deleteSingleEvent)
router.patch("/update-date-and-time",EventController.updateDateAndTime)
router.post("/send-email",EventController.emailSend)

export const  EventRouter = router