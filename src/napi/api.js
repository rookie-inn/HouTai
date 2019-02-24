const path = require("path")
const express = require("express")
const  app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/api/users",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    res.json({
        us:{name:"葫芦岛吴奇隆",lv:8,vip:false},
    })
})
app.listen(3001,(err)=>{
    console.log("server starting on port 3001")
})