import React,{Component} from 'react';
import echarts from "../../node_modules/echarts/lib/echarts"
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import Header from "../components/Header"

let data = {
    title: '华为',
    dataSex: [{
        name: '北京',
        value: '8000.00'
    }, {
        name: '上海',
        value: '6000.00'
    }, {
        name: '深圳',
        value: '4000.00'
    }, {
        name: '南京',
        value: '2000.00'
    }, {
        name: '成都',
        value: '3000.00'
    }, {
        name: '西安',
        value: '1000.00',
    }],
    dataAge: [{
        name: '北京',
        value: '2000.00'
    }, {
        name: '上海',
        value: '1800.00'
    }, {
        name: '深圳',
        value: '1500.00'
    }, {
        name: '南京',
        value: '1000.00'
    }, {
        name: '成都',
        value: '1600.00'
    }, {
        name: '西安',
        value: '800.00'
    }],
    dataHostype: [{
        name: '北京',
        value: '8000.00'
    }, {
        name: '上海',
        value: '6000.00'
    }, {
        name: '深圳',
        value: '12000.00'
    }, {
        name: '南京',
        value: '6000.00'
    }, {
        name: '成都',
        value: '8000.00'
    }, {
        name: '西安',
        value: '4000.00'
    }],
    dataDis: [{
        name: '北京',
        value: '2000.00'
    }, {
        name: '上海',
        value: '1800.00'
    }, {
        name: '深圳',
        value: '1500.00'
    }, {
        name: '南京',
        value: '1000.00'
    }, {
        name: '成都',
        value: '1600.00'
    }, {
        name: '西安',
        value: '800.00'
    },{
        name: '其他',
        value: '1000.00'
    }],
};
let echartsOption = {
    backgroundColor: '#F8F8FF',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    title: [{
        top: '10%',
        text: data.title + '手机销量分布',
        textStyle: {
            color: '#3494BD',
            fontSize: 18,
            align: 'center',
        },
        left: '5%',
    },
        {
            top: '10%',
            text: data.title + '电脑&平板销量分布',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '28%',
        }, {
            top: '10%',
            text: data.title + '智能穿戴',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '57%',
        },
        {
            top: '10%',
            text: data.title +'家居配件',
            textStyle: {
                color: '#3494BD',
                fontSize: 18,
                align: 'center',
            },
            left: '82%',
        }
    ],
    tooltip: {
        show:true,
        showContent: true,
        islandFormatter: '{c}' + '（万元）',
    },
    legend: {
        show:true,
        orient: 'vertical',
        right: '7%',
        top: '13%',
        data: ["华为手机销售分布",
            "华为电脑&平板销量分布",
            "华为智能穿戴",
            "华为家居配件"],
        itemWidth: 24,   // 设置图例图形的宽
        itemHeight: 18,  // 设置图例图形的高
        textStyle: {
            color: '#666'  // 图例文字颜色
        }
    },
    series: [
        // begin
        {
            //name: '',
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: "50%",
            center: ['12%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                    // show:false,
                    // formatter:  '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    // padding: [20, -150],
                    // height: 70,
                    fontSize: 10,
                    position: 'inner',
                    // align: 'center',
                    color: '#fff',
                }
            },
            data: data.dataSex,
        },
        //end
        //begin
        {
            //name:
            color: ['#76FBC0', '#2AC9FD'],
            type: 'pie',
            radius:"50%",
            center: ['37%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {

                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -90],
                    position:"inner",
                    // height: 70,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataAge,
        },
        //end
        //begin
        {
            //name: '用药性别数量',
            color: ['#76FBC0', '#29C6FA', '#FCC708', '#5957C2'],
            type: 'pie',
            radius: "50%",
            center: ['62%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    // show:false,
                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -80],
                    position:"inner",
                    // height: 75,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataHostype,
        },
        //end
        {
            color: ['#76FBC0', '#2AC9FD', '#35C96E', '#FCC708', '#5957C2', '#4A5D73'],
            type: 'pie',
            radius: "50%",
            center: ['87%', '50%'],
            labelLine: {
                normal: {
                    show:false,
                    length: 25,
                    length2: 65,
                    lineStyle: {
                        // color: '#41B3DC',
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    // show:false,
                    // formatter: '{b} : ' + '{d}%' + '\n' + '{c}' + '（万元）',
                    borderWidth: 0,
                    borderRadius: 4,
                    // padding: [0, -80],
                    position:"inner",
                    // height: 75,
                    fontSize: 10,
                    align: 'center',
                    color: '#fff',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 5,
                            color: '#41B3DC'
                        }
                    }
                }
            },
            data: data.dataDis,
        },
        //end
    ]
}
export default class Pie extends Component{
    render (){
        return<div style={styles.hedy}>
               {/*<Header/>*/}
            {/*<div style={styles.ydiv}>*/}
                 <h3 style={styles.h3}>华为产品销量分布图</h3>
                <div id="line" style={styles.body}>
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
        this.state = {
            xl:this.xl,
            isEdit:false
        }
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
    body:{width:"90%",height:"300px",margin:"0 auto",marginTop: "0"},
    table:{width:"90%",backgroundColor:"#F8F8FF", borderCollapse:"collapse",border:"1px solid #eee",margin:"0 auto",marginTop:"30px"},
    lisHead:{textAlign:"center",padding:"1% 0",borderBottom:"1px solid #eee",backgroundColor:"#3494BD",color:"#fff",fontSize:"1rem"},
    lis:{padding:"1% 0",textAlign:"center", borderBottom: "1px solid #eee"},
    inputVal:{border:"none",textAlign:"center",outline:"none",backgroundColor:"#F8F8FF"},
    btn:{border:"none",outline: "none",backgroundColor:"#F8F8FF"},
    h3:{color:"#333333",textAlign:"center",lineHeight:"60px",fontSize:"22px",marginTop:"0"}
}
