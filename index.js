require('dotenv').config()
const express =  require("express");

const app = express();


app.get('/',(req,res)=>{
    res.send("home page");
})

app.get('/chandan',(req,res)=>{
    res.send("this is chandan page");
})

app.get('/cks',(req,res) => {
    res.send('cks bhai');
})

app.listen(process.env.PORT,()=>{
    console.log(`server running at port ${process.env.PORT}`);
})