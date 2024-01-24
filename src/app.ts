import express, { Application, Request, Response } from 'express'


const app: Application = express()
import cors from 'cors'
import handleGlobalError from './midleware/GlobalErrorHandler';
import notFoundRoute from './midleware/notFound'
import router from './app/routes'

// parser
app.use(express.json())
app.use(cors())

app.use('/api/v1',router)

app.get('/', (req: Request, res: Response) => {
  res.send('scheduling is building')
})

// global error handler 
app.use(handleGlobalError)

// not found route 

app.use(notFoundRoute)

export default app
