import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { UserRouter } from './app/modules/user/user.route'

// parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/users',UserRouter )

app.get('/', (req: Request, res: Response) => {
  res.send('vao ki obostha tumar')
})

export default app
