import React, {Component} from "react"
import {Button,Table} from "element-react"
import "element-theme-default"
export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "ID",
                    prop: "id",
                    width: 100,
                    fixed: 'left',
                    align: 'center'
                },
                {
                    label: "图片",
                    width: 160,
                    align: 'center',
                    render: (img) => {return <img src={img.img} style={styles.imgs} />}
                },
                {
                    label: "产品名称",
                    prop: "name",
                    width: 260,
                    align: 'center',
                },
                {
                    label: "价格",
                    prop: "price",
                    width: 100,
                    align: 'center',
                },
                {
                    label: "类型",
                    prop: "type",
                    width: 120,
                    align: 'center',
                },
                {
                    label: "数量",
                    prop: "num",
                    width: 80
                },
                {
                    label: "描述",
                    prop: "nameOne",
                    width: 400
                },
                {
                    label: "操作",
                    width: 90,
                    fixed: 'right',
                    render: (row, column, index)=>{
                        return <span>
                                <Button type="text" size="small" icon="edit" onClick={this.editRow.bind(this, index)}></Button>
                                <Button type="text" size="small" icon="delete" onClick={this.deleteRow.bind(this, index)}></Button>
                        </span>
                    }
                }
            ],
            data: [
                 {
                     id: 1,
                     img: "/img/428_428_1542706656249mp.png",
                     name: "HUAWEI P20 Pro 6GB+128GB 全网通版（极光闪蝶）",
                     price: 4988,
                     type: "官方标配",
                     num: 3,
                     nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                },
                {
                    id: 2,
                    img: "/img/428_428_1542765208952mp.png",
                    name: "HUAWEI nova 3 6GB+64GB 全网通版（蓝楹紫）",
                    price: 2988,
                    type: "官方标配",
                    num: 1,
                    nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                },
                {
                    id: 3,
                    img: "/img/428_428_1542769704670mp.png",
                    name: "HUAWEI Mate 10 Pro 6GB+128GB 全网通版（银钻灰）",
                    price: 3999,
                    type: "官方标配",
                    num: 13,
                    nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                },
                {
                    id: 4,
                    img: "/img/428_428_1542854080066mp.png",
                    name: "华为畅享8 4GB+64GB 全网通高配版（金色）",
                    price: 1988,
                    type: "官方标配",
                    num: 21,
                    nameOne:"①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
                }
                ]
        }
    }
    //单个删除
    deleteRow(index,e) {
        if(window.confirm("确定要删除吗？")){
            this.setState({
                data:this.state.data.filter((elem, i) => index !== i)
            })
        }else{
            return false
        }
    }

    //编辑
    editRow(index){

    }

    //添加产品
    add(){
        var { data }=this.state;
        console.log(data)
        this._data = data.concat({
            id: 5,
            img: "/img/428_428_1542765208952mp.png",
            name: "HUAWEI nova 3 6GB+64GB 全网通版（蓝楹紫）",
            price: 288,
            type: "官方标配",
            num: 3,
            nameOne: "①领券减100 ②赠豪华配件礼包，赠品有限，送完即止 ③6期分期免息",
        });
        this.setState({data:
                this._data
        })
    }

    //批量删除
    delete(){
        // console.log(this.state.data.length)
        // this.piliang.bind(this,selection)
    }
    //选中的产品
    piliang(selection,e){
        // console.log(selection)
        for(let s in selection){
            console.log(selection[s].id)
            this.setState({
                data:this.state.data.filter((elem, i) => (selection[s].id-1) !== i)
                // data:this.state.data.splice(selection[s].id-1,1,"")
            })
        }
    }
    render(){
        return <div style={styles.bigbox}>
                <div style={styles.header}>
                    <span style={styles.line}></span><h1 style={styles.h1}>手机</h1>
                </div>
                <Button type="danger" icon="delete" style={styles.button}  onClick={this.delete.bind(this)}>批量删除</Button>
                <Button type="primary" icon="edit" style={styles.button1} onClick={this.add.bind(this)}>添加产品</Button>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    style={styles.table}
                    onSelectChange={this.piliang.bind(this)}
                    onSelectAll={(selection) => { console.log(selection.length) }}
                />
        </div>
    }
}
const styles={
    bigbox:{width:"100%",height:"100%",background:"#d7d7d7",color:"#333",paddingLeft:"20px",boxSizing:"border-box"},
    header:{display:"flex",paddingTop:"26px",height:"30px",lineHeight:"30px"},
    h1:{width:"100%",fontSize:"18px",marginLeft:"20px"},
    line:{borderLeft:"2px solid green",display:"block",width:"2px",height:"30px"},
    button:{marginTop:"15px",width:"92px",background:"#dd514c",borderColor:"#dd514c",padding:"10px 0"},
    button1:{background:"#5a98de",borderColor:"#5a98de"},
    table:{marginTop:"20px",width:"93%"},
    imgs:{width:"100px",height:"100px"}
}