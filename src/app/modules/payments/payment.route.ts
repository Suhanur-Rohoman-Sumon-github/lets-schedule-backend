import express from 'express'
import { paymentsControllers } from './payment.controller'
const router = express.Router()

router.post("/create-payment-intent",paymentsControllers.createPaymentIntentFromDb)
router.post("/save-payment-history",paymentsControllers.savePaymentsDataInDatabase)

export const  PaymentRouter = router
