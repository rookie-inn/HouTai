import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga/rootSaga"


let initState ={
     num:0,
     users:[{user:"任正非",zh:"000001",pas:"000000",Status:"超级管理员"},{user:"刘强东",zh:"000002",pas:"111111",Status:"至尊管理员",show:false},
         {user:"",zh:"wwwwwwww",pas:"wwwwwwww",Status:"请注册/登录",show:false}
     ],
}
let reducer =(state,action)=>{
     switch(action.type){
         case"uss":
             return guolu(action,state);
             break;
         case"zhuxiao":
             return {num2:"",num3:"请注册/登录",isgo:false}
             break;
         case"isgo":
                   return {shuzu:state.users}
             break;
         default: return state;
     }
}
 function guolu2(action,data){
      initState.users.map((n,i)=>{
         if(action.zh==n.zh && action.pas==n.pas){
             let use=n.user;
             let use2=n.Status;
             let isg="true";
             console.log(use,use2,isg)
             // return mmpcc(use,use2,isg)
             return {mmp1:use,mmp2:use2,mmpg:isg,mmp3:isg}
         }else{
             return {mmp1:"use",mmp2:"use2",mmpg:"isg",mmp3:"isg"}
         }
     })

 }
  function mmpcc(use,use2,isg) {
     console.log(use,use2,isg)
      return {mmp1:use,mmp2:use2,mmpg:isg,mmp3:isg}
  }
function guolu(action,data){
    for(let i = 0;i< initState.users.length;i++){
          if(action.zh==initState.users[i].zh && action.pas==initState.users[i].pas){
              let use=initState.users[i].user;
              let use2=initState.users[i].Status;
              return {num2:use,num3:use2}
          }
    }
     return {num2:"",num3:"请注册/登录"}
}
 function isgo2(action,data){
     initState.users.map((n,i)=>{
         if(action.zh==initState.users[i].zh && action.pas==initState.users[i].pas){
              console.log(initState.users[i].Status);
              return {isgo:true,n2:"ceshi",n3:"ceshi"}
         }
     })
     return {isgo:false}
 }
 function isgo(action,data){
     console.log(action)
     console.log(data)
     for(let i = 0;i< initState.users.length;i++){
         if(action.zh==initState.users[i].zh && action.pas==data.users[i].pas){
             let use=initState.users[i].user;
             let use2=initState.users[i].Status;
             console.log(initState.users[i].user)
             return {num2:use,num3:use2,iso:true}
         }
     }
     return {num2:"",num3:"请注册/登录",iso:false}
 }
let logerMiddleware = store=>next=>action=>{
     console.log("有动作从组件中dispatch")
    console.log(action)
    next(action)
}
 let acctionsMiddleWare=store=>next=>action=>{
      console.log("actions middleware 延迟执行 2000")
     setTimeout(()=>{
          let newAction = Object.assign(action,{data:1})
         console.log(newAction)
          next(newAction)
     },200)
 }

 let permissionMiddleware=store=>next=>action=>{
     let rights = localStorage.getItem("user")
     if(rights){
         next(action)
     }else {
          console.log("您无权发起修改store的请求")
     }
 }
 let sageMiddleware=createSagaMiddleware()
let store = createStore(reducer,initState,applyMiddleware(sageMiddleware))
sageMiddleware.run(rootSaga)
export default store;