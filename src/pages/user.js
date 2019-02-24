import React, {Component} from "react"
import {Link} from "react-router-dom"
import Userlist from "../components/Userlist"
import  Header from "../components/Header"
import Highcharts from "highcharts";

export default class User extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[{user:"15339166126",pas:"000000",di:"北京市 海淀区",name:"吴奇隆",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"谢霆锋",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"迪丽热巴",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15339166126",pas:"000000",di:"北京市 海淀区",name:"欧阳娜娜",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"卢本苇",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"古力娜扎",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"西安市 高新区",name:"范冰冰",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                ],
            zc:0,
            fj:0,
        }
    }
ceshi() {
        fetch("/api/users").then(res=>{
            res.json().then(data=>{
                this.huidiao(data);
            })
        })
}
    huidiao(data){
          this.getdata(data);
        this.state.users.concat(data);
        var nusers=this.state.users.concat(data);
        this.setState({
            users:nusers
        })
    }
shan(i){
         if( this.state.users[i].zt=="正常"){
             this.state.users[i].zt="已封禁"
             ++this.state.fj;
             --this.state.zc;
         }else{
             this.state.users[i].zt="正常"
             --this.state.fj;
             ++this.state.zc;
         }
    this.setState({
    })
    this.renderGraph();
}
    componentDidMount(){
        this.getdata(this.state.users);
        this.getttt();
    }
    getttt(){
         setTimeout(()=>{
             this.renderGraph();
         },10)
    }
    getdata(data){
        data.map((n,i)=>{
             if(n.zt==="正常"){
                  ++this.state.zc;
             }else if(n.zt==="已封禁"){
                 ++this.state.fj;
             }
        })
       this.setState({})
        this.getttt();
    }
    renderGraph = () => {
        let Data = {
            title: { //表头
                text: '商城当前用户封禁状态比例图',
                style:{
                    fontSize:"30px",
                    fontWeight:"600"
                }
            },

            colors:[
                '#ac0',//第一个颜色，欢迎加入Highcharts学习交流群294191384
                'red',//第二个颜色
            ],

            subtitle: { //副标题
                text: '数据来源：华为团队',
                style:{
                    fontSize:"26px",
                }
            },

            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            plotOptions: {
                pie: {
                    innerSize: 150,
                    depth: 45,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            // fontSize: '40px',
                            // color: (Highcharts.theme || Highcharts.theme.contrastTextColor)
                            color: "green"
                        }
                    }
                }
            },

            series: [{
                dataLabels:{
                    style:{
                        color:"red",
                        fontSize:"24px"
                    }
                },
                type:"pie",
                size:"80%",
                innerSize: "40%",
                name: '所在城市用户',

                data: [
                    ['正常用户', this.state.zc],
                    ['封禁用户', this.state.fj],
                ],

            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 1000
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            },
            tooltip:{
                title:{
                    style:{
                        color:"blue"
                    }
                },
                backgroundColor:"#fff",
                style: {                      // 文字内容相关样式
                    color: "#000000",
                    fontSize: "18px",
                    fontWeight: "blod",
                    fontFamily: "Courir new"
                }
            }
        }
        Highcharts.chart(this.refs.alarmHighChart, Data);
    }

            render(){
                let liest = this.state.users.map((n,i)=>{
                    return <Userlist key={i} n={n} i={i+1} shan={this.shan.bind(this,i)}/>
                })
                return <div>
                        <h5 style={styles.h5}>已注册用户列表</h5>
                     <div style={styles.li1}>
                         <span style={styles.span}>序号</span>
                         <span style={styles.span}>用户名</span>
                         <span style={styles.span}>性别</span>
                         <span style={styles.span2}>手机号码</span>
                         <span style={styles.span2}>邮箱</span>
                         <span style={styles.span3}>常用地址</span>
                         <span style={styles.span2}>注册时间</span>
                         <span style={styles.span}>状态</span>
                         <span style={styles.span23}>操作</span>
                     </div>
                    { liest  }
                    <div ref="alarmHighChart" style={styles.d1}/>
                      <p onClick={this.ceshi.bind(this)} style={styles.but}>点击获取更多用户信息</p>
                 </div>
            }
}
let styles = {
    h5:{fontSize:"22px",textAlign:"center",lineHeight:"50px",marginTop:"0px"},
     li1:{width:"1400px",height:"40px",background:"#caedff",lineHeight:"40px",textIndent:"20px",margin:"0 auto"},
    span:{width:"100px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"},
    span2:{width:"180px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"},
    span22:{width:"180px",height:"40px",float:"left",textAlign:"center"},
    span23:{width:"100px",height:"40px",float:"left",textAlign:"center",cursor:"pointer",},
    span3:{width:"280px",height:"40px",borderRight:"1px solid #cfddde",float:"left",textAlign:"center"},
    ydiv:{float: "left",height:"88%",width:"90%",position:"absolute",left:"180px",top:"100px",overflowY:"auto"},
    but:{width:"200px",height:"50px",lineHeight:"50px",textAlign:"center",background: "#caedff",cursor: "pointer",float:"right",marginRight:"100px"},
    d1:{width:"59%",height:"500px",border:"2px solid #eee",float:"left",marginLeft:"8%"},
}