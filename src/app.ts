import express, { Application, Request, Response } from 'express'
const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);

const app: Application = express()
import cors from 'cors'
import { UserRouter } from './app/modules/user/user.route'
import { EventRouter } from './app/modules/schedule/schedule.route'
import { EmailRote } from './app/modules/mail/mail.route'
import { PaymentRouter } from './app/modules/payments/payment.route'

// parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/users',UserRouter )
app.use('/api/v1/events',EventRouter )
app.use('/api/v1/mail',EmailRote )
app.use('/api/v1/payments',PaymentRouter )
app.get('/', (req: Request, res: Response) => {
  res.send('scheduling is building')
})



export default app
