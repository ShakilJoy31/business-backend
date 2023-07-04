import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import httpStatus from 'http-status'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Route.
app.use('/api/v1/', router);

// Handle not found route
app.use((req:Request, res: Response, next: NextFunction)=>{
    console.log('something');
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API is not found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: `${req.originalUrl} is not found`
            }
        ]
    })
})

export default app

  