import express from 'express'


const router = express.Router()

router.post('/creat-students', StudentControllers.createStudent)


export const StudentRouter = router
