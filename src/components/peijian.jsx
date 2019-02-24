import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button,Table,Icon,Tag,TableBody} from 'element-react';

import 'element-theme-default';




const styles={
    jiaju:{
        flex:"1",
        height:"100%",
        background:"#d7d7d7",
        color:"black",
    },
    jj:{
        height:"100px",
        lineHeight:"100px",
        fontSize:"24px",
        borderLeft:"2px solid black",
        paddingLeft:"20px",
        marginBottom:"20px",
    },
    imgs:{
        width:"100px",
        height:"100px",

    },
    table:{marginTop:"20px",width:"93%"},

}


export default class Line extends Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "ID",
                    prop: "ids",

                    align: 'center'
                },
                {
                    label: "图片",
                    align: 'center',
                    render: (img) => {return <img src={img.img} style={styles.imgs} />}
                },
                {
                    label: "产品名称",
                    prop: "name",
                    align: 'center',
                },
                {
                    label: "价格",
                    prop: "price",
                    align: 'center',
                },
                {
                    label: "类型",
                    prop: "type",
                    align: 'center',
                },
                {
                    label: "数量",
                    prop: "num",
                },
                {
                    label: "描述",
                    prop: "nameOne",
                },
                {
                    label: "操作",
                    render: (row, column, index)=>{
                        return <span>
                    <Button type="text" size="small" icon="edit"></Button>
                    <Button type="text" size="small" icon="delete" onClick={this.deleteRow.bind(this, index)}></Button>
            </span>
                    }
                }
            ],

            data: [

                {
                    ids: '1001',
                    name: 'HUAWEI nova 3硅胶保护壳（浅艾蓝）',
                    img: '/img/peijian01.jpg',
                    price:'69',
                    type: "官方标配",
                    nameOne:"购买即赠送商城积分，积分可抵现",
                    num:'200'
                }, {
                    ids: '1002',
                    name: 'Rockbear 长草颜团子通话精灵保护套（粉色）适配华为儿童手表3、荣耀小K2',
                    img: '/img/peijian02.jpg',
                    price:'49',
                    type: "官方标配",
                    nameOne:"直径：270mm高度：318mm",
                    num:'270'
                },{
                    ids: '1003',
                    name: 'HUAWEI P20屏幕高透保护膜',
                    img: '/img/peijian03.jpg',
                    price:'749',
                    type: "官方标配",
                    nameOne:"购买即赠商城积分，积分可抵现",
                    num:'20'
                },{
                    ids: '1004',
                    name: 'BRASPORT 意大利牛皮表带 适配HUAWEI WATCH GT、荣耀手表Magic、HUAWEI WATCH 2',
                    img: '/img/peijian04.jpg',
                    price:'99',
                    type: "官方标配",
                    nameOne:"意大利精选牛皮 设计轻奢至简 适用于22mm接口的手表",
                    num:'70'
                },{
                    ids: '1005',
                    name: '荣耀盒子Pro AV线（白色）',
                    img: '/img/peijian05.jpg',
                    price:'94',
                    type: "官方标配",
                    nameOne:"（只适用荣耀盒子Pro，不适用荣耀盒子标准版和华为盒子M330）",
                    num:'320'
                }, {
                    ids: '1006',
                    name: 'HUAWEI 真皮内胆包',
                    img: '/img/peijian06.jpg',
                    price:'419',
                    type: "官方标配",
                    nameOne:"（只适用荣耀盒子Pro，不适用荣耀盒子标准版和华为盒子M330）",
                    num:'360'
                }]
        }

    }
    deleteRow(index,e) {
        this.setState({
            data:this.state.data.filter((elem, i) => index !== i)
        })
    }
    render (){

        return <div style={styles.jiaju}>
            <h3 style={styles.jj}>通用配件</h3>
            <Table
                style={{width: '95%',fontSize:"16px",marginLeft:"10px"}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
                maxHeight={550}
                onSelectChange={(selection) => { console.log(selection) }}
                onSelectAll={(selection) => { console.log(selection) }}
            />
        </div>
    }


}

