import express from "express";
import { messageController } from "./message.controller";
const router = express.Router()


router.post("/save-message" ,messageController.saveMessageDataInDatabase)
router.get("/single-message" ,messageController.getSingleMessageDataFromDb)
router.patch("/update-message" ,messageController.updateMessageDataFromDb)
router.get("/all-message" ,messageController.GetAllMessageDataFromDb)
router.get("/category-message" ,messageController.GetSubCategoryMessageDataFromDb)

export const  messageRoute = router