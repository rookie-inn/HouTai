import React,{Component} from 'react';
import {Progress} from "element-react"
import 'element-theme-default';

export default class Dqxl extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {city : "上海",progress : "85"},
                {city : "北京",progress : "65"},
                {city : "苏州",progress : "82"},
                {city : "广州",progress : "79"},
                {city : "杭州",progress : "91"},
                {city : "黑龙江",progress : "100"},
                {city : "台湾",progress : "69"},
                {city : "西安",progress : "73"},
                {city : "合肥",progress : "86"}
            ]
        }
    }
    render (){
        return <div style={styles.bigBox}>
            <h6 style={styles.bigBoxTitle}>地区当月销量管理</h6>
            <div style={styles.areaListBox}>
                <ul style={styles.areaListBoxUl}>
                    {
                        this.state.data.map(item=>{
                            return <li style={styles.areaListBoxUlLi}>
                                <p style={styles.areaListBoxUlLiP}>{item.city}</p>
                                <p style={styles.areaListBoxUlLiPTwo}>
                                    <Progress style={styles.areaListBoxUlLiPTwoProgress}  type="circle" percentage={item.progress} />
                                </p>
                            </li>
                        })
                    }

                </ul>
            </div>
        </div>
    }
}
let styles = {
    bigBox : {
        width : "100%",height:"100%",background : "#d7d7d7",fontSize : "18px"
    },
    bigBoxTitle : {
        lineHeight : "50px" ,textIndent:"30px",fontSize : "18px"
    },
    areaListBox : {
        width : "100%"
    },
    areaListBoxUl : {
        padding:"10px", overflow:"hidden"
    },
    areaListBoxUlLi : {
        width:"220px", height:"240px" , overflow:"hidden", background : "white",margin:"5px",
        float : "left",display : "flex",flexDirection:"column"
    },
    areaListBoxUlLiP : {
        width:"100%", lineHeight:"40px" ,background : "rgb(238,238,238)",margin:"0",
        fontSize:"14px",textAlign:"center"
    },
    areaListBoxUlLiPTwo : {
        width:"100%",flex:"1",display : "flex",alignItems:"center",justifyContent:"center",
        fontSize:"14px"
    },
    areaListBoxUlLiPTwoProgress : {
        color : "red"
    }
}