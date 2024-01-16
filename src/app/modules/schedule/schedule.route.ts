import express from 'express'
import { EventController } from './schedule.controller'
const router = express.Router()


router.get("/get-event",EventController.Events)
router.get("/get-all-event",EventController.AllEvents)
router.get("/get-all-events",EventController.getSingleDateAndTimeFromDb)
router.get("/get-SingleEvents",EventController.SingleEvents)
router.delete("/delete-event",EventController.deleteSingleEvent)
router.post("/creat-event",EventController.creatNewEvent)
router.patch("/update-date-and-time",EventController.updateDateAndTime)
router.post("/send-email",EventController.emailSend)

export const  EventRouter = router