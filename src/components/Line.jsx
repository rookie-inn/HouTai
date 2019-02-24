import React,{Component} from 'react';
import echarts from "../../node_modules/echarts/lib/echarts"
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid';
import Header from "../components/Header"



var xAxisData = ['北京', '上海', '深圳', '南京', '成都', '西安'];
var legendData= ['手机','电脑&平板','智能穿戴',"家具配件"];
var title = "华为主要产品销量各地区折线图";
var serieData = [];
var metaDate = [
    [8000, 14000, 8000, 4500, 4800, 1000],
    [12000, 16400, 6000, 6000, 8000, 6400],
    [9000,12000, 8000, 6500, 4600, 2800],
    [6000,8000,7500,2000,2000,2600]
]
for(var v=0; v < legendData.length ; v++){
    var serie = {
        name:legendData[v],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        data: metaDate[v]
    };
    serieData.push(serie)
}
var colors = ["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"];
let echartsOption = {
    backgroundColor: '#0f375f',
    title : {text: title,textAlign:'left',y:'4%',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
    legend: {
        show:true,left:"right",data:legendData,y:"5%",
        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
    },
    color:colors,
    grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
    tooltip : {
        trigger: 'axis',
        axisPointer : { type : 'line'}
    },
    xAxis: [
        {
            type: 'category',
            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
            axisTick : {show: false},
            data:xAxisData,
        },
    ],
    yAxis: [
        {
            axisTick : {show: false},
            splitLine: {show:false},
            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
            axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
        },
    ],
    series:serieData
}
export default class Line extends Component{
    render (){
        return<div>
            {/*<Header/>*/}
            {/*<div style={styles.ydiv}>*/}
                <h3 style={styles.h3}>华为产品销量分布图</h3>
                <div id="line" style
                    ={styles.body}>
                </div>
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <td style={styles.lisHead}>华为产品地区销量</td>
                        <td style={styles.lisHead}>华为手机销量</td>
                        <td style={styles.lisHead}>华为电脑&平板销量</td>
                        <td style={styles.lisHead}>华为智能穿戴</td>
                        <td style={styles.lisHead}>华为家具配件</td>
                        <td style={styles.lisHead}>编辑</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={styles.lis}>北京</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal}
                                   type="text" defaultValue={8000}
                                   name="xl" onChange={this.changeValue}
                                   default={this.state.xl}

                            />
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.lis}>上海</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.lis}>深圳</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.lis}>南京</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.lis}>成都</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.lis}>西安</td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={8000}/>
                        </td>
                        <td style={styles.lis}>
                            <input style={styles.inputVal} type="text" defaultValue={2000}/>
                        </td>
                        <td style={styles.lis}>
                            <button style={styles.btn} onClick={this.submitValue}>修改</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            {/*</div>*/}
        </div>
    }
    constructor(props,context) {
        super(props,context)
        this.state = {}
    }
    componentDidMount () {
        this.newGraph()
    }
    newGraph(){
        var myChart = echarts.init(document.getElementById('line'));
        myChart.setOption(echartsOption)
    }
}
const styles={
    head:{backgroundColor:"#d7d7d7",color:"#333"},
    body:{width:"90%",height:"500px",margin:"0 auto",marginTop: "0"},
    table:{width:"90%",backgroundColor:"#F8F8FF", borderCollapse:"collapse",border:"1px solid #eee",margin:"0 auto",marginTop:"30px"},
    lisHead:{textAlign:"center",padding:"1% 0",borderBottom:"1px solid #eee",backgroundColor:"#3494BD",color:"#fff",fontSize:"1rem"},
    lis:{padding:"1% 0",textAlign:"center", borderBottom: "1px solid #eee"},
    inputVal:{border:"none",textAlign:"center",outline:"none",backgroundColor:"#F8F8FF"},
    btn:{border:"none",outline: "none",backgroundColor:"#F8F8FF"},
    h3:{color:"#333333",textAlign:"center",lineHeight:"60px",fontSize:"22px",marginTop:"0"}
}