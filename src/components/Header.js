import {Component} from "react";
import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom"
import store from "../store"
import PropTypes from 'prop-types';
export default class MmpMmp extends Component {
    constructor(props){
        super(props);
        this.state= {
            users:"任正非",
            user:"",
            shenfen:"",
            zh:"000001",
            zh2:"0000101",
            pas:"000000",
            zh3:"000002",
            pas2:"111111",
            zhuxiaoz:"wwwwwwww",
            zhuxiaom:"wwwwwwww",
        }
    }

        show(o,i){
             if(document.getElementsByClassName("uls")[o].style.display==="none"){
                 document.getElementsByClassName("uls")[o].style.display="block"
                 document.getElementsByClassName("ii")[o].style.transform="rotateZ(180deg)"
             }else{
                 document.getElementsByClassName("uls")[o].style.display="none"
                 document.getElementsByClassName("ii")[o].style.transform="rotateZ(0deg)"
             }
         }
         componentDidMount(){
            store.subscribe(()=>{
                this.setState({
                    n2:store.getState().num2,
                    n3:store.getState().num3,
                    // isgo:store.getState().isgo,
                })
            })
             this.ggg();
         }
         ggg(){
             let ty={type:"uss",zh:this.state.zh3,pas:this.state.pas2};
                   store.dispatch(ty);
                  this.xss()
         }
         xss(){
        setTimeout(()=>{
            // console.log(this.state.isgo)
            if(this.state.n2===""){
                document.getElementsByClassName("login")[0].style.display="none";
                document.getElementsByClassName("login2")[0].style.display="block";
            }else{
                document.getElementsByClassName("login")[0].style.display="block";
                document.getElementsByClassName("login2")[0].style.display="none";
            }
        },10)
         }
    zhuxiao(n,next){
        let ty2={type:"zhuxiao",zh:this.state.zhuxiaoz,pas:this.state.zhuxiaom};
        store.dispatch(ty2);
        // this.state.n2=""
        // this.state.n3=""
        // console.log(this.state.n2);
        this.xss()

    }
    static contextTypes = {
        router: PropTypes.object
    }
    tiao1(){
        this.props.gg(0)
    }
    tut(){
        this.props.gg(1)
    }
    tbing(){
         this.props.gg(2)
    }
    tline(){
        this.props.gg(3)
    }
    tzhu(){
        this.props.gg(4)
    }
    gopone(){
        this.props.gg(5)
    }
    gopeij(){
        this.props.gg(6)
    }
    gohomejj(){
        this.props.gg(7)
    }
    tpl(i){
        this.props.gg(i);
    }
    render(){
        return <div style={styles.bigbox}>
              <div style={styles.div1}>
                   <p style={styles.p} >商城后台官理系统</p>
                  <div style={styles.hedy}>
                      <p className="user" style={styles.p2}>{this.state.n3}</p>
                      <p className="user2" style={styles.p2}>{this.state.n2}</p>
                      <p className="login" style={styles.p22} onClick={this.zhuxiao.bind(this)}>退出登录</p>
                      <Link to="/login" style={styles.p22}  className="login2">登录</Link>
                  </div>
              </div>
             <div style={styles.div2}>
                 <div style={styles.head}>
                     <h5 style={styles.li1} onClick={this.show.bind(this,0)}><i style={styles.i} className="iconfont icon-dingdanguanli-"></i><span>产品管理</span>
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                 <ul style={styles.ul} className="uls">
                   <li style={styles.li}>品牌管理</li>
                   <li style={styles.li}>分类管理</li>
                   <li style={styles.li}>产品管理</li>
                 </ul>
                     <h5 style={styles.li1} onClick={this.show.bind(this,1)}><i style={styles.i} className="iconfont icon-pengyou1"></i>商家管理
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                     <ul style={styles.ul} className="uls">
                         <li style={styles.li} onClick={this.tpl.bind(this,10)}>商家信息</li>
                         <li style={styles.li}>商家销量</li>
                         <li style={styles.li} onClick={this.tpl.bind(this,9)}>地区销量</li>
                     </ul>
                     <h5 style={styles.li1} onClick={this.show.bind(this,2)}><i style={styles.i} className="iconfont icon-pinpai"></i>产品管理
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                     <ul style={styles.ul} className="uls">
                         <li style={styles.li} onClick={this.gopone.bind(this)}>手机</li>
                         <li style={styles.li}>电脑&平板</li>
                         <li style={styles.li}>智能穿戴</li>
                         <li style={styles.li} onClick={this.gohomejj.bind(this)}>智能家居</li>
                         <li style={styles.li} onClick={this.gopeij.bind(this)}>配件</li>
                     </ul>
                     <h5 style={styles.li1} onClick={this.show.bind(this,3)}><i style={styles.i} className="iconfont icon-pengyou"></i>用户管理
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                     <ul style={styles.ul} className="uls">
                         {/*<Link to="/a" style={styles.li}>用户数量</Link>*/}
                         <li style={styles.li} onClick={this.tiao1.bind(this)}>用户数量</li>
                         <li style={styles.li} onClick={this.tut.bind(this)}>用户分布</li>
                     </ul>
                     <h5 style={styles.li1} onClick={this.show.bind(this,4)}><i style={styles.i} className="iconfont icon-pinglun1"></i>评论管理
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                     <ul style={styles.ul} className="uls">
                         <li style={styles.li} onClick={this.tpl.bind(this,8)}>用户评论</li>
                         <li style={styles.li}>用户反馈</li>
                     </ul>
                     <h5 style={styles.li1} onClick={this.show.bind(this,5)}><i style={styles.i} className="iconfont icon-tongji"></i>系统统计
                         <img src={require("../img/xia1.jpg")} alt="" style={styles.ii} className="ii"/>
                     </h5>
                     <ul style={styles.ul} className="uls">
                         <li style={styles.li} onClick={this.tline.bind(this)}>折线图统计</li>
                         <li style={styles.li} onClick={this.tzhu.bind(this)}>柱状图统计</li>
                         <li style={styles.li} onClick={this.tbing.bind(this)}>饼状图统计</li>
                     </ul>
                 </div>
             </div>
          </div>
    }
}
const styles={
    bigbox:{width:"100%",minHeight: "900px"},
    head:{width:"180px",minHeight:"800px",background:"#eeeeee",position: "absolute",left:"0",top:"1px",display:"flex",flexDirection:"column",paddingTop:"20px"},
    ul:{flexDirection:"column",padding:"0",margin:"0",display:"none"},
    li1:{fontSize:"18px",color:"#333333",lineHeight:"40px",cursor:"pointer",borderBottom:"1px solid #e5e5e5",display:"block",textAlign:"center",width:"100%",height:"40px",margin:"0 0",position:"relative"},
    li:{fontSize:"15px",color:"#333333",listStyle:"none",cursor:"pointer",border:"1px solid #e5e5e5",lineHeight:"33px",textAlign:"center"},
    div1:{width:"100%",height:"60px",background:"#000000"},
    div2:{width:"100%",height:"1px",background:"#eeeeee",position:"relative"},
    p:{color:"white",fontSize: "20px",textAlign:"center",lineHeight:"60px", float:"left",width:"200px",height:"60px",marginTop:"0",marginLeft:"60px"},
    hedy:{float:"left",width:"20%",height:"60px",lineHeight:"60px",marginTop:"0",marginLeft:"50%"},
    p2:{float:"left",color:"white",fontSize:"16px",lineHeight:"60px",margin:0,marginLeft:"20px",cursor:"pointer"},
    p22:{float:"left",color:"white",fontSize:"14px",lineHeight:"63px",margin:0,marginLeft:"20px",cursor:"pointer"},
    i:{marginRight:"10px",marginLeft:"10px",transform:"scale(2.3)"},
    ii:{display:"block",width:"18px",height:"10px",position:"absolute",left:"85%",top:"14px"}
}
