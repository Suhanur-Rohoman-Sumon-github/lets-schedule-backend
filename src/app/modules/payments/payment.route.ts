import express from 'express'
import { paymentsControllers } from './payment.controller'
import validateRequest from '../../../middleware/validateRequest'
import paymentsValidationSchema from './payment.validation'
const router = express.Router()

// create a new payment intent in database
router.post("/create-payment-intent",paymentsControllers.createPaymentIntentFromDb)
// handle validate request when the data save in the database just check the request.body the data is right or wrong 
router.post("/save-payment-history", validateRequest(paymentsValidationSchema) ,paymentsControllers.savePaymentsDataInDatabase)
router.get("/single-user-payments",paymentsControllers.getSinglePaymentsDataFromDb)
router.get("/all-payments",paymentsControllers.getAllPaymentFromDb)
router.get("/todays-payments",paymentsControllers.getTodaysAllPaymentFromDb)

export const  PaymentRouter = router
