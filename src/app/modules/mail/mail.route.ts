import express from 'express'
import { mailController } from './mail.controller'
const router = express.Router()

router.post("/send-email",mailController.emailSend)

export const EmailRote = router