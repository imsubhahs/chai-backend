//require ('dotenv').config({path:'./env'})

import mongoose  from "mongoose"

import { DB_NAME } from "./constants";

import connectDB from "./db";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((er)=>{
    console.log("Mongo db connection failed", er)
})












// import express from "express"
// const app =express()

// ;(async ()=>{
//     try {
//      await   mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
//      app.on("error",(error)=>{
//         console.log("error")
//         throw error
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log(`app is listentning atr ${process.env.PORT}`)
//      })
        
//     } 
//     catch (error) {
//         console.log(error)
//     }

// })()
