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
                name: '华为路由器',
                img: '/img/wifi01.jpg',
                price:'169',
                type: "官方标配",
                nameOne:"四根高性能天线，大功率信号放大器，智能天线算法。双核CPU，更快，更稳。",
                num:'120'
            }, {
                ids: '1002',
                name: '荣耀路由器',
                img: '/img/wifi02.jpg',
                price:'199',
                type: "官方标配",
                nameOne:"赠送积分\",\"购买即赠商城积分，积分可抵现",
                num:'100'
            },{
                ids: '1003',
                name: '字母/分布式路由',
                img: '/img/wifi03.jpg',
                price:'749',
                type: "官方标配",
                nameOne:"限时特价\",\"2.15-2.17限时直降30元",
                num:'20'
            },{
                ids: '1004',
                name: '电力猫/WiFi放大器',
                img: '/img/wifi04.jpg',
                price:'169',
                type: "官方标配",
                nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                num:'70'
            },{
                ids: '1005',
                name: '随行WiFi',
                img: '/img/wifi05.jpg',
                price:'94',
                type: "官方标配",
                nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                num:'50'
            }, {
                ids: '1006',
                name: '电视盒子',
                img: '/img/wifi01.jpg',
                price:'419',
                type: "官方标配",
                nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                num:'80'
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
            <h3 style={styles.jj}>智能家居</h3>
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

