const express = require('express');
const connect = require('./configs/db');
const app = express();
require("dotenv").config()

app.use(express.json());

const UserController = require('./controllers/user.controller')
const MobileController = require('./controllers/mobile.controller')
const IpadController = require('./controllers/Ipad.controller')
const LaptopController = require('./controllers/laptop.controller')


app.use("/auth",UserController);
app.use("/mobiles",MobileController);
app.use("/Ipads",IpadController);
app.use("/laptops",LaptopController);


app.listen(process.env.PORT || 2345, async (req,res) => {
    try{
        connect()
        console.log("listening on port 2345")
    }catch(e){
        res.send(e)
    }
})