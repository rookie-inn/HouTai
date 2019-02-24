import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class Userlist extends Component {
        constructor(props){
            super(props);
            this.state={
                kef:"封禁"
            }
        }
     red(){
             if(this.state.kef==="封禁"){
                 document.getElementsByClassName("feng")[this.props.i-1].style.color="red"
             }else{
                 document.getElementsByClassName("feng")[this.props.i-1].style.color="green"
             }

    }
    hei(){
        document.getElementsByClassName("feng")[this.props.i-1].style.color="black"
    }
    shan(){
             this.props.shan(this.props.i)
    }
    // componentWillMount(){
            // setTimeout(()=>{
            //     this.redAndGreen();
            // },500)
    // }


    componentWillUpdate(){
        this.redAndGreen();
    }
       redAndGreen(){
           if(this.props.n.zt==="正常"){
               document.getElementsByClassName("zt")[this.props.i-1].style.color="green"
               this.state.kef="封禁"
           }else{
               document.getElementsByClassName("zt")[this.props.i-1].style.color="red"
               this.state.kef="解除封禁"
           }
       }
    componentDidUpdate(){

            // document.getElementById("zt").style.color="red";
    }
    componentDidMount(){
            // console.log("consmogosijd111111111")
        this.redAndGreen();
    }
    render(){
             return <div>
                 <div style={styles.li1}>
                     <span style={styles.span}>{this.props.i}</span>
                     <span style={styles.span}>{this.props.n.name}</span>
                     <span style={styles.span}>{this.props.n.age}</span>
                     <span style={styles.span2}>{this.props.n.user}</span>
                     <span style={styles.span2}>{this.props.n.yx}</span>
                     <span style={styles.span3}>{this.props.n.di}</span>
                     <span style={styles.span2}>{this.props.n.day}</span>
                     <span style={styles.span} className="zt" id="zt">{this.props.n.zt}</span>
                     <span style={styles.span23} className="feng" onMouseOver={this.red.bind(this)} onMouseOut={this.hei.bind(this)} onClick={this.shan.bind(this)}>
                         {/*<span  ></span>*/}
                         {this.state.kef}
                     </span>
                 </div>
             </div>
        }
}
let styles = {
    h5:{fontSize:"22px",textAlign:"center",lineHeight:"50px",marginTop:"20px"},
    li1:{width:"1400px",height:"40px",background:"#ffffff",lineHeight:"40px",textIndent:"20px",margin:"0 auto",borderBottom:"1px solid #cfddde"},
    span:{width:"100px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"},
    span2:{width:"180px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"},
    span22:{width:"180px",height:"40px",float:"left",textAlign:"center",cursor:"pointer",},
    span23:{width:"100px",height:"40px",float:"left",textAlign:"center",cursor:"pointer",},
    span3:{width:"280px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"}
}