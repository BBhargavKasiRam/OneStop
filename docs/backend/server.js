import express from 'express'
import cors from 'cors'
import 'dotenv/config' //we can use .env file in our project

//APP CONFIG
const app=express()
const port = process.env.PORT || 4000 //if not available then provide port number 

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//API ENDPOINTS
app.get('/',(req , res)=>{
    res.send("API Working")
})

app.listen(port, ()=>console.log('server started on port :'+port))
