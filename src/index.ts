import express from 'express'
const app = express()
import { connectDB } from './db/connect'
import { notFound } from './middleware/not-found'
import authRoute from './routes/auth'
import protectedRoutes from './routes/protected'
require('dotenv').config()

const port = process.env.PORT || 3000;

// middleware
app.use(express.json())

// Routes
app.use('/api/user', authRoute);
app.use('/api/protected', protectedRoutes); // just for example
app.use(notFound)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server listening on port ${port}...`))
    } catch (err) {
        console.log(err);
    }
}

start()