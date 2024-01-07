const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnect');
const toDoRouter = require('./routes/toDoRoute')
const errorHandler =require('./middleware/errorHandle')
const cors = require('cors');



connectDB()
const app = express();



const port = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json())
app.use("/todo", toDoRouter)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server runing on ${port}`);
})



