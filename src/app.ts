import express, { Application, Request, Response } from 'express'
import http from 'http';
import { Server } from 'socket.io';
const app: Application = express()
import cors from 'cors'
import handleGlobalError from './middleware/GlobalErrorHandler';
import notFoundRoute from './middleware/notFound'
import router from './app/routes'
import initializeSocket from './utils/socket';
import mongoose from 'mongoose';
import config from './app/config';
const server = http.createServer(app);
// parser
app.use(express.json())
app.use(cors())

app.use('/api/v1',router)

// Initialize Socket.IO
const io = new Server(server);
initializeSocket(io);

app.get('/', (req: Request, res: Response) => {
  res.send('scheduling is building')
})

// global error handler 
app.use(handleGlobalError)

// not found route 

app.use(notFoundRoute)

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(`${config.database_url}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToDatabase();

export default app
