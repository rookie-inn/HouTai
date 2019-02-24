import React,{Component} from "react"
// import store from "../store";
import store from "../store/index"
import "../js/iden"
import PropTypes from 'prop-types';
export default class NewsList extends Component {
    constructor(props){
        super(props);
        this.state={
            n:100,
            user:"",
            mima:"",
            yzm:"",
            user2:"",
            mima2:"",
            iso:"",
            isgo:"",
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount(){
        console.log("componentDidMount")
        store.subscribe(()=>{
            this.setState({
             shuzu:store.getState().shuzu
            })
        })
    }

    change(e){
           this.setState({
               user:e.target.value
           })
    }
    changem(e){
        this.setState({
            mima:e.target.value
        })
    }
    changeyz(e){
         this.setState({
             yzm:e.target.value
         })
    }
    login(){
        document.getElementById("tishi").style.display="none";
        // let action={type:"isgo",zh:this.state.user,mima:this.state.mima};
        let action={type:"isgo",zh:this.state.user,pas:this.state.mima};
         store.dispatch(action);
        this.yanchigo()
        // this.context.router.history.push("/")
    }
    yanchigo(){
        setTimeout(()=>{
                  let  isgo =false;
            this.state.shuzu.map((n,i)=>{
                if(n.zh==this.state.user && n.pas==this.state.mima){
                    isgo=true;
                }
            })
            setTimeout(()=>{
                // this.ggggo(isgo);
                this.context.router.history.push("/");
            },200)

        },800)
    }

    ggggo(isgo){
         if(isgo){
             this.context.router.history.push("/");
         }else{
             console.log(this.state.shuzu)
             document.getElementById("tishi").style.display="block";
         }
    }

    render(){
        return  <div style={styles.bigbox}>
            <img src={require("../img/timg (1).jpg")} alt="" style={styles.iiimg}/>

                <div style={styles.box}>
                        <p style={styles.h5}>商城后台管理系统登录</p>
                       <div style={styles.inpw}>
                        账 &nbsp;&nbsp; 号:   <input type="text" style={styles.inpt} onChange={this.change.bind(this)} defaultValue={this.state.user}/>
                       </div>
                    <div style={styles.inpw}>
                        密  &nbsp;&nbsp; 码:   <input type="password" style={styles.inpt} onChange={this.changem.bind(this)} defaultValue={this.state.mima}/>
                    </div>
                    <div style={styles.inpw}>
                        验证码:   <input type="text" style={styles.inpt2} onChange={this.changeyz.bind(this)} defaultValue={this.state.yzm}/>
                        <img src={require("../img/yzm1.jpg")} alt="" style={styles.yzm}/> <span style={styles.huan}>换一张</span>
                    </div>


                        <p style={styles.tishi} id="tishi">账号或密码错误</p>

                     <div style={styles.checkw}>
                        <input type="checkbox" style={styles.checkbox} />记住密码
                     </div>
                     <p style={styles.login} onClick={this.login.bind(this)}>登录</p>
                    {/*<div style={styles.inpw}>*/}
                        {/*<p>{this.state.user}</p>*/}
                    {/*</div>*/}
                    {/*<div style={styles.inpw}>*/}
                        {/*<p>{this.state.mima}</p>*/}
                    {/*</div>*/}
                </div>
               </div>
    }
}
const styles={
        bigbox:{width:"100%",minHeight:"970px",backgroundSize:"100%",position:"relative",margin:0},
       iiimg:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"},
       box:{width:"500px",height:"420px",position:"absolute",left:"32%",top:"20%",background:"rgba(255, 255, 255,0.5)",},
      h5:{fontSize:"20px",width:"100%",textAlign:"center",background:"rgba(55, 55, 55,0.9)",height:"50px",margin:"0",lineHeight:"50px",color:"white"},
    inpw:{width:"100%",height:"50px",marginTop:"20px",lineHeight:"50px",textIndent:"40px"},
    inpt:{width:"65%",height:"40px",lineHeight:"40px",outLIne:"none",borderRadius:"8px",marginLeft:"20px",textIndent:"10px",marginTop:"2px",border:"1px solid #cbb5ba",background:"rgba(255, 255, 255,0.5)",},
    inpt2:{width:"35%",height:"40px",lineHeight:"40px",outLIne:"none",borderRadius:"8px",marginLeft:"20px",textIndent:"10px",marginTop:"2px",border:"1px solid #cbb5ba",background:"rgba(255, 255, 255,0.5)",},
    yzm:{marginLeft:"10px",position:"relative",top:"12px"},
    huan:{marginLeft:"10px",color:"#f23e0d",cursor:"pointer"},
    checkw:{width:"100%",height:"40px",lineHeight:"40px"},
    tishi:{width:"100%",lineHeight:"20px",color:"red",fontSize:"16px",textAlign:"center",display:"none"},
    checkbox:{transform:"scale(1.6)",marginLeft:"40%",marginRight:"20px",marginTop:"5px"},
    login:{width:"80%",fontSize:"18px",height:"45px",background:"rgba(255, 155, 155,0.9)",margin:"0 auto",color:"white",lineHeight:"45px",cursor: "pointer",textAlign: "center",borderRadius:"10px"}
}
