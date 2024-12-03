const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/user.routes');
require('dotenv').config()
const connectDB = require('./config/db');
connectDB()

//Engine
app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res) => {
    res.render('index')
})

//routes
app.use('/user', userRouter)

// port
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log("server is runnug on port 3000")
})