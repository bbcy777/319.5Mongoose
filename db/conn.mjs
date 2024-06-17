// import { MongoClient } from "mongodb";
// import dotenv from 'dotenv';
// dotenv.config();

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;

// try{
//     conn = await client.connect();
//     console.log('Connected to Mongo');
// } catch (err) {
//     console.log(err);
// }
import mongoose from 'mongoose'
module.exports = function connectDB(){
    mongoose.connect(process.env.ATLAS_URI)
    const db = mongoose.connection
    db.on('error', (e)=> console.log(e))
    db.on('open', console.log('Connected to Mongo'))
    db.on('close', ()=> console.log('MongoDB disconnected'))
}
