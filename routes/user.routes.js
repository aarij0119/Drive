const express  = require('express')
const router = express.Router();

router.get('/register',(req,res)=>{
    res.send("user router")
});

module.exports = router