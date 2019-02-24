const Koa = require("koa2")
const app = new Koa()
const Router = require("koa-router")
const router = new Router()
 router .get("/api/users",async(cxt)=>{
      cxt.body =["张三"]
 })
app.use(router.routes()).use(router.allowedMethods());
app.listen(8000,()=>{
    console.log("koa server is ready on port 8000")
})