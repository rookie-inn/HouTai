import React,{Component} from 'react';
import { Button,Table } from 'element-react';
import 'element-theme-default';

export default class Evaluation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 140,
                    align: 'center'
                },
                {
                    label: "图片",
                    prop: "imgs",
                    width: 120,
                    render: (img)=><img src={img.img} style={styles.imgs} />
                },
                {
                    label: "用户名",
                    prop: "name",
                    width: 120,
                    align: 'center'
                },
                {
                    label: "星级",
                    prop: "star",
                    width: 100,
                    align: 'center'
                },
                {
                    label: "评价",
                    prop: "pingjia",
                    width: 470,
                    align: 'left'
                },
                {
                    label: "操作",
                    width: 100,
                    render: (row, column, index)=>{
                        return <span>
                            <Button type="text" size="large" icon="edit" onClick={this.editRow.bind(this, index)}></Button>
                            <Button type="text" size="large" icon="delete" onClick={this.deleteRow.bind(this, index)}></Button>
                        </span>
                    }
                }
            ],
            data: [
                {
                    date: '2019-02-18',
                    name: '浏阳河good',
                    img : "/img/1.jpg",
                    star: 5,
                    pingjia: '好用，好用！必须支持华为！送的礼品也给力。手机超级喜欢'
                },
                {
                    date: '2019-02-18',
                    name: 'dbdfbfdb',
                    img : "/img/2.jpg",
                    star: 5,
                    pingjia: '手机收到，今天试用一下，确实不错，网速很快，商家服务态度周到，物流也给力。'
                },
                {
                    date: '2019-02-013',
                    name: '想***',
                    img : "/img/3.jpg",
                    star: 5,
                    pingjia: '相当不错，就是喜欢华为，这像素很好'
                },
                {
                    date: '2019-02-12',
                    name: '13122***',
                    img : "/img/4.jpg",
                    star: 5,
                    pingjia: '功能就是666的，很好用'
                },
                {
                    date: '2019-02-12',
                    name: '华子',
                    img : "/img/5.jpg",
                    star: 5,
                    pingjia: '国货精品，华为品质，值得信赖！'
                },
                {
                    date: '2019-02-10',
                    name: '13911**',
                    img : "/img/6.jpg",
                    star: 5,
                    pingjia: '宝贝收到，使用流畅，速度快。推荐入手，支持华为。'
                },
                {
                    date: '2019-02-08',
                    name: 'B**N',
                    img : "/img/7.jpg",
                    star: 5,
                    pingjia: '前天晚上下单隔一天下午收到顺丰就是速度 期待好用'
                },
                {
                    date: '2019-02-06',
                    name: 'good',
                    img : "/img/8.jpeg",
                    star: 5,
                    pingjia: '物流很快，手机美关大方，物有所值，华为手机的l确很好，我一直用华为我一直用这个牌子'
                },
                {
                    date: '2019-02-06',
                    name: '浏阳河good',
                    img : "/img/9.jpg",
                    star: 5,
                    pingjia: '好用，好用！必须支持华为！送的礼品也给力。手机超级喜欢'
                },
                {
                    date: '2019-02-06',
                    name: '军***团',
                    img : "/img/10.jpg",
                    star: 5,
                    pingjia: '华为很好，拍照拍视频都行，第二个华为了 买了第一个很好现在买这个用了半个月也很好 华为粉'
                },
                {
                    date: '2019-02-06',
                    name: 'good',
                    img : "/img/11.jpg",
                    star: 5,
                    pingjia: '物流很快，手机美关大方，物有所值，华为手机的l确很好，我一直用华为我一直用这个牌子'
                },
                {
                    date: '2019-02-06',
                    name: 'fanyindichen',
                    img : "/img/12.jpg",
                    star: 5,
                    pingjia: '手机收到，今天试用一下，确实不错，网速很快，商家服务态度周到，物流也给力。'
                },
                {
                    date: '2019-02-05',
                    name: '华子',
                    img : "/img/13.jpg",
                    star: 5,
                    pingjia: '国货精品，华为品质，值得信赖！'
                },
                {
                    date: '2019-02-05',
                    name: '军***团',
                    img : "/img/14.jpg",
                    star: 5,
                    pingjia: '华为很好，拍照拍视频都行，第二个华为了 买了第一个很好现在买这个用了半个月也很好 华为粉'
                },
                {
                    date: '2019-02-05',
                    name: 'good',
                    img : "/img/15.jpg",
                    star: 5,
                    pingjia: '物流很快，手机美关大方，物有所值，华为手机的l确很好，我一直用华为我一直用这个牌子'
                },
                {
                    date: '2019-02-05',
                    name: '响***z',
                    img : "/img/16.jpg",
                    star: 5,
                    pingjia: '"给老丈人买的！昨天下的单，今天就到了！手机很漂亮'
                },
                {
                    date: '2019-02-05',
                    name: '佛***爷',
                    img : "/img/17.jpg",
                    star: 5,
                    pingjia: '"惊喜！！！      很漂亮耶（老婆）   。情人节首选礼物，老婆很开心！默默的买来没有告诉她一点点消息，就是为了这一刻做准备，作为男人就是为了让老婆开心，内心就会有喜悦和满足！感谢华为的技术，感谢华为的礼物！'
                },
                {
                    date: '2019-02-05',
                    name: 'h*****',
                    img : "/img/18.jpg",
                    star: 5,
                    pingjia: '"手机真的超好，顺畅！全屏设计，用着很爽哦！买的红色，喜欢喜欢'
                },
                {
                    date: '2019-02-05',
                    name: '13793***',
                    img : "/img/19.jpg",
                    star: 5,
                    pingjia: '"手机已收到，快递速度很快，快递小哥服务态度好 ，手机质量也不错，我们都很喜欢。'
                },
                {
                    date: '2019-02-03',
                    name: '18992***',
                    img : "/img/20.jpg",
                    star: 5,
                    pingjia: '"手机不错，用起来也方便。'
                },
                {
                    date: '2019-02-02',
                    name: 'h*****',
                    img : "/img/21.jpg",
                    star: 5,
                    pingjia: '"手机真的超好，顺畅！全屏设计，用着很爽哦！买的红色，喜欢喜欢'
                },
                {
                    date: '2019-02-02',
                    name: '响***z',
                    img : "/img/22.jpg",
                    star: 5,
                    pingjia: '"买给我哥用的，春节也送货。物流很快。很满意，很流畅，好评！'
                },
                {
                    date: '2019-02-02',
                    name: '佛***爷',
                    img : "/img/23.jpg",
                    star: 5,
                    pingjia: '"物流超快，第二天一早就收到了，手机手感也很好，还有赠品！'
                },
                {
                    date: '2019-02-01',
                    name: '******',
                    img : "/img/24.jpg",
                    star: 5,
                    pingjia: '"不错，老婆很喜欢😍'
                },
                {
                    date: '2019-02-01',
                    name: '平安是福',
                    img : "/img/25.jpg",
                    star: 5,
                    pingjia: '"全家4部华为手机，买电脑也买华为。支持华为！'
                },
                {
                    date: '2019-02-01',
                    name: '李林',
                    img : "/img/26.jpg",
                    star: 5,
                    pingjia: '"物流超级快，产品不错，值得拥有，等待5G产品早日上市。'
                },
                {
                    date: '2019-02-01',
                    name: '吕***畅',
                    img : "/img/27.jpg",
                    star: 5,
                    pingjia: '"手感很好很完美。一直信赖华为，为华为点👍👍👍'
                },
                {
                    date: '2019-02-01',
                    name: 'F***5',
                    img : "/img/28.jpg",
                    star: 5,
                    pingjia: '"很好，喜欢。'
                },
                {
                    date: '2019-01-30',
                    name: '平安是福',
                    img : "/img/29.jpg",
                    star: 5,
                    pingjia: '"全家4部华为手机，买电脑也买华为。支持华为！'
                },
                {
                    date: '2019-01-30',
                    name: '李林',
                    img : "/img/30.jpg",
                    star: 5,
                    pingjia: '"就支持华为，中国人自己的品牌力量。'
                },
                {
                    date: '2019-01-30',
                    name: '吕***畅',
                    img : "/img/31.jpg",
                    star: 5,
                    pingjia: '"手感挺好的，性能也不错，可以拥有的一款产品，是个好伴侣'
                },
            ]
        }
    }
    editRow(index,e) {
        this.setState({
            data : this.state.data.filter((ele,i)=> index !== i)
        })
    }
    deleteRow(index,e) {
        this.setState({
            data : this.state.data.filter((ele,i)=> index !== i)
        })
    }
    render (){
        return <div style={styles.evaluationBox}>
            <h3 style={styles.evaluationTitle}>用户评价</h3>
            <Table
                style={{width: '88%',margin:"0 auto"}}
                columns={this.state.columns}
                data={this.state.data}
                border={true}
                maxHeight={650}
            />
        </div>
    }
}
let styles = {
    evaluationBox : {
        width : "100%" ,height : "100%" ,backgroundColor : "#d7d7d7",color : "#333333",
        fontSize : "18px"
    },
    evaluationTitle : {
        lineHeight : "50px", textIndent : "20px", fontSize:"16px",
    },
    imgs : {
        width : "80px",height : "80px",display : "block",margin : "10px"
    }
}