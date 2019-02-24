import React, {Component} from "react"

import Highcharts from "highcharts"
import ReactHighcharts from "react-highcharts"
import "highcharts/modules/exporting"
import highcharts3d from "highcharts/highcharts-3d"
highcharts3d(ReactHighcharts.Highcharts);
export default class Usert extends Component {
    componentDidMount() {
        this.getdata(this.state.users);
        this.getdata2(this.state.users);
        this.gettu();
    }
    gettu(){
        setTimeout(()=>{
            this.renderGraph();
            this.renderGraph2()
        },100)
    }
    constructor(props){
        super(props);
        this.state={
            bj:0,
            sh:0,
            xa:0,
            man:0,
            wumon:0,
            users:[{user:"15339166126",pas:"000000",di:"北京市 海淀区",name:"吴奇隆",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"谢霆锋",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"迪丽热巴",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15339166126",pas:"000000",di:"北京市 海淀区",name:"欧阳娜娜",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"卢本芦",age:"男",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"上海市 虹桥区",name:"古力娜扎",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
                {user:"15336666666",pas:"111111",di:"西安市 高新区",name:"范冰冰",age:"女",yx:"1151480555@qq.com",day:"2019/2/12/18:30",zt:"正常"},
            ],
        }
    }
    getdata2(data){
        data.map((n,i)=>{
            if(n.di.substring(0,3)==="北京市"){
                ++this.state.bj;
            }else if(n.di.substring(0,3)==="上海市"){
                ++this.state.sh;
            }else if(n.di.substring(0,3)==="西安市"){
                ++this.state.xa;
            }
        })
        this.gettu();
        this.setState({})
    }

    getdata(data){
        data.map((n,i)=>{
             if(n.age==="男"){
                ++this.state.man;
            }else if(n.age==="女"){
                ++this.state.wumon;
            }
        })

          this.gettu();
        this.setState({})
    }

    getstata(){
           fetch("/api/users").then(res=>{
                res.json().then(data=>{
                     console.log(data);
                     this.getdata(data);
                     this.getdata2(data);
                })
        })
    }
    renderGraph = () => {
        let Data = {
            title: { //表头
                text: '2017 ~ 2019年商城用户注册人数分布图',
                style:{
                    fontSize:"30px",
                    fontWeight:"600"
                }
            },
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
                style:{
                    color:"red"
                },
                data: [
                    ['北京', this.state.bj],
                    ['上海', this.state.sh],
                    ['西安', this.state.xa],
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
    renderGraph2 = () => {
       let Data = {
           chart: {
               type: 'pie',
               options3d: {
                   enabled: true,
                   alpha: 45,
                   beta: 0
               }
           },
           colors:["#3eaaf5","#fe89a3"],
            title: { //表头
                text: '2017 ~ 2019年商城注册用户性别比例',
                style:{
                    fontSize:"30px",
                    fontWeight:"600"
                }
            },
            subtitle: { //副标题
                text: '数据来源：华为团队',
                style:{
                    fontSize:"26px",
                }
            },


            plotOptions: {
                pie: {
                    innerSize: 150,
                    depth: 45,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
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
                name: '注册人数',
                style:{
                    color:"red"
                },
                data: [
                    ['男', this.state.man],
                    ['女', this.state.wumon],

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
        Highcharts.chart(this.refs.alarmHighChart2, Data);
    }
    render() {
        return (
            <div>
                <div ref="alarmHighChart" style={styles.d1}/>
                <div ref="alarmHighChart2" style={styles.d1}/>
                <p  style={styles.but} onClick={this.getstata.bind(this)}>点击获取更多用户信息</p>
            </div>
        );
    }
}

let styles={
     d1:{width:"49%",height:"600px",border:"2px solid #eee",float:"left"},
    but:{width:"200px",height:"50px",lineHeight:"50px",textAlign:"center",background: "#caedff",cursor: "pointer",float:"right",marginRight:"100px",marginTop:"50px"}
}