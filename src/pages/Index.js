import React, {Component, Fragment} from "react"
import {BrowserRouter, Link,NavLink} from "react-router-dom"
import Switch from "react-router-dom"
import Header from "../components/Header"
import user from "../pages/user"
import { Route,Router} from 'react-router-dom';
import Pie from "../components/Pie"
import Lin from "../components/Line"
import zhu from "../components/Bar"
import PropTypes from 'prop-types';
import usert from "../pages/Usert"
import phone from "../components/Phone/phone"
import peijian from "../components/peijian"
import homejj from "../components/homejj"
import evaluation from "../components/Evaluation"
import dqxl from "../components/sjgl/Dqxl"
import sjxx from "../components/sjgl/Sjxx"
let com=[user,usert,Pie,Lin,zhu,phone,peijian,homejj,evaluation,dqxl,sjxx]
export default class Index extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props){
        super(props);
        this.state={
            kef:"封禁",
            n:0,
        }
    }
    gg(n,i){
        this.setState({
            n:i
        })
    }
       render(){
            return<div style={styles.bigbox}>
                 <Header  gg={this.gg.bind(this,this.state.n)}/>
                  <div style={styles.ydiv}>
                      <Fragment>
                          <Route path="/" exact component={com[this.state.n]} />
                      </Fragment >
                  </div>
            </div>
       }
}
const styles={
    bigbox:{width:"100%",height:"100%",position:"relative"},
    divz:{float:"left",width:"200px"},
    ydiv:{float: "left",height:"88%",width:"90%",position:"absolute",left:"180px",top:"70px",overflowY:"auto"},
    img:{width:"100px",height: "50px"}
}