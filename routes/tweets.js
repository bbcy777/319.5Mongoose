import express from 'express'
import Tweet from '../models/Tweet.js'
import User from '../models/User.js'
const router = express.Router()
router.post('/', async (req, res) => {
    console.log(req.body);
    const {username, content} = req.body
    const dbUser = await User.findOne({username})
    if(dbUser){
        const tweet = await Tweet.create({
            content: content,
            user: dbUser._id,
            username: dbUser.username})
        return res.json(tweet)
    } else {
        const newUser = await User.create({username})
        const tweet = await Tweet.create({
            content: content,
            user: newUser._id,
            username: newUser.username})
        return res.json(tweet)
    }
})
router.get('/', async (req,res) =>{
    res.send('Getting all tweets')
})
router.delete('/', async (req, res) => {
    res.send('Deleting Tweet')
})
router.put('/', async (req, res) => {
    res.send('Updating Tweet')
})
export default router