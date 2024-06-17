import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import tweetRouter from './routes/tweets.js'
dotenv.config()
mongoose.connect(process.env.ATLAS_URI)
const app = express()
const PORT = process.env.PORT || 4001
app.use(express.json())
app.use('/tweets', tweetRouter)
app.get('/', (req, res) => {
    res.send('Welcome to the API')
})
app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))