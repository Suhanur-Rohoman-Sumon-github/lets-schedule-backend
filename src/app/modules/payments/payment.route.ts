import express from 'express'
import { paymentsControllers } from './payment.controller'
const router = express.Router()

router.post("/create-payment-intent",paymentsControllers.createPaymentIntentFromDb)
router.post("/save-payment-history",paymentsControllers.savePaymentsDataInDatabase)
router.get("/single-user-payments",paymentsControllers.getSinglePaymentsDataFromDb)
router.get("/all-payments",paymentsControllers.getAllPaymentFromDb)

export const  PaymentRouter = router
