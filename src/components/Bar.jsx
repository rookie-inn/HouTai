import React,{Component} from 'react';
import echarts from "../../node_modules/echarts/lib/echarts"
import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import Header from "./Header"


var scale = 1;

var dataOne = [8000, 2000, 8000,2000,];

var dataTwo = [6000, 1800, 6000,1000,];

var dataThree = [10000, 1500, 12000,3500];

var dataFour = [6000,1000,6000,1000];

var dataFive = [3000,1600,8000,1600];

var color = "#189cbb";
let echartsOption = {
    backgroundColor: '#F8F8FF',

    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效

            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    legend: {
        data: ['北京', '上海', '深圳','南京','成都','西安'],

        align: 'left',
        itemGap: 30,
        // x: 'right',
        right:'0%',
        y: '5%',
        icon: 'rect',
        itemWidth: 15*scale, // 图例图形宽度

        itemHeight: 15*scale, // 图例图形高度

        textStyle: {
            color: "#3fdaff",
            fontSize: 16*scale
        }
    },

    grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        data: ['手机', '电脑&平板', '智能穿戴','家居配件'],

        axisLabel: {
            // inside: true,
            padding: [15, 0, 0, 0],
            textStyle: {
                color: "#fff",
                fontSize: 16*scale,
            }
        },
        axisTick: {
            inside:true,
            length:8*scale,
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        // max:600,
        axisLabel: {
            // inside: true,
            padding: [0, 15, 0, 0],
            textStyle: {
                color: color,
                fontSize: 12*scale,
            }
        },
        axisTick: {
            lineStyle: {
                color: color,
            }
        },
        axisLine: {
            lineStyle: {
                color: color,
            }
        },

        splitLine: {
            lineStyle: {
                color: 'rgba(80,224,255,0.3)',
                type: 'dashed'
            },
            show:false,
        },
        name: '销量(万元)',
        nameTextStyle: {
            color: "#fff",
            fontSize: 16*scale,
            // padding: [0, 0, 0, 0]
        }
    }],
    series: [
        {
            name: '北京',
            type: 'bar',
            stack:'北京',
            barWidth: '10%',
            barGap:'40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    // distance:20*scale,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10*scale
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:'rgba(94,218,255,0.4)',
                }
            },
            data: dataOne
        },
        {
            name: '北京',
            type: 'bar',
            stack:'北京',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                normal: {
                    color:'#83e0fc',
                }
            },
            data: [2*scale, 2*scale, 2*scale]
        },
        {
            name: '上海',
            type: 'bar',
            stack:'上海',
            barWidth: '10%',
            barGap:'40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    // distance:20*scale,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10*scale
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(20,124,146,0.4)',
                }
            },
            data: dataTwo
        },
        {
            name: '上海',
            type: 'bar',
            stack:'上海',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                normal: {
                    color:'#23aecb',
                }
            },
            data: [2*scale, 2*scale, 2*scale]
        },
        {
            name: '深圳',
            type: 'bar',
            stack:'深圳',
            barWidth: '10%',
            barGap:'40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    // distance:20*scale,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10*scale
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(9,149,124,0.4)',
                }
            },
            data: dataThree
        },
        {
            name: '深圳',
            type: 'bar',
            stack:'深圳',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                normal: {
                    color:'#10c8a7',
                }
            },
            data: [2*scale, 2*scale, 2*scale]
        },
        {
            name: '南京',
            type: 'bar',
            stack:'南京',
            barWidth: '10%',
            barGap:'40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    // distance:20*scale,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10*scale
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(150,140,150,0.4)',
                }
            },
            data: dataFour
        },
        {
            name: '南京',
            type: 'bar',
            stack:'南京',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                normal: {
                    color:'#10c8a7',
                }
            },
            data: [2*scale, 2*scale, 2*scale]
        },
        {
            name: '成都',
            type: 'bar',
            stack:'成都',
            barWidth: '10%',
            barGap:'40%',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    // distance:20*scale,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#ffc72b",
                        fontSize: 10*scale
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(160,80,110,0.4)',
                }
            },
            data: dataFive
        },
        {
            name: '成都',
            type: 'bar',
            stack:'成都',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                normal: {
                    color:'#10c8a7',
                }
            },
            data: [2*scale, 2*scale, 2*scale]
        }]
}
export default class Bar extends Component{
    render (){
        return <div>
                  {/*<Header/>*/}
            <div style={styles.hedy}>
                     <h3 style={styles.h3}>华为产品销量柱状图</h3>
                <div id="bar" style
                    ={{width:"90%",height:"500px",margin:"0 auto"}}>
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

            </div>
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
        var myChart = echarts.init(document.getElementById('bar'));
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