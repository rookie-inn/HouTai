import React,{Component} from 'react';
import {Table,Button} from "element-react"
import 'element-theme-default';
export default class Sjxx extends Component{
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "注册时间",
                    prop: "date",
                    width: 150
                },
                {
                    label: "商家名称",
                    prop: "name",
                    width: 160
                },
                {
                    label: "联系人",
                    prop: "personName",
                    width: 160
                },
                {
                    label: "商家联系方式",
                    prop: "concat",
                    width: 160
                },
                {
                    label: "线下门店地址",
                    prop: "address"
                }
            ],
            data: [
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '王小虎',
                    concat: '18034237623',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '王二妮',
                    concat: '18034237623',
                    address: '陕西榆林'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '刘能',
                    concat: '18034237623',
                    address: '辽宁铁岭开原松山镇象牙山村'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '冈村宁次',
                    concat: '18034237623',
                    address: '日本东京'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '樱空桃',
                    concat: '18034237623',
                    address: '日本秋田县'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '谢大脚',
                    concat: '18034237623',
                    address: '辽宁丹东'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '张三丰',
                    concat: '18034237623',
                    address: '辽宁阜新'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '杨过',
                    concat: '18034237623',
                    address: '天堂乡地狱村'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '乔峰',
                    concat: '18034237623',
                    address: '契丹乙室部人'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '雄霸',
                    concat: '18034237623',
                    address: '日本福冈县福冈市'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '李秀琴',
                    concat: '18034237623',
                    address: '陕西延安'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '竹木纯一',
                    concat: '18034237623',
                    address: '日本大阪'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '姚贝娜',
                    concat: '18034237623',
                    address: '湖北武汉'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '奥斯特洛夫斯基',
                    concat: '18034237623',
                    address: '乌克兰维里亚村'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '娜塔莎',
                    concat: '18034237623',
                    address: '英国/新西兰'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '比比·琼斯',
                    concat: '18034237623',
                    address: '美国俄克拉何马州的俄克拉何马市'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: 'Anikka Albrite',
                    concat: '18034237623',
                    address: '美国科罗拉多州'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: 'Elsa Jean',
                    concat: '18034237623',
                    address: '美国俄亥俄州的坎顿市'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '金允珍',
                    concat: '18034237623',
                    address: '韩国首尔'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '巨石强森',
                    concat: '18034237623',
                    address: '美国加利福尼亚州海沃德市'
                },
                {
                    date: '2016-05-02',
                    name: '**专卖店',
                    personName: '杰森·斯坦森',
                    concat: '18034237623',
                    address: '英国伦敦'
                }
            ]
        }
    }




    render (){
        return <div style={styles.bigBox}>
            <h6 style={styles.bigBoxTitle}>商家信息</h6>
            <Table
                style={{width: '90%',margin : '0 auto'}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
                height={600}
                onSelectChange={(selection) => { console.log(selection) }}
                onSelectAll={(selection) => { console.log(selection) }}
            />
        </div>
    }
}
let styles = {
    bigBox : {
        width : "100%",height:"100%",background : "#d7d7d7",fontSize : "18px"
    },
    bigBoxTitle : {
        lineHeight : "50px" ,textIndent:"20px",fontSize : "18px"
    }
}