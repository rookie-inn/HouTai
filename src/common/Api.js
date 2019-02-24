import Axios from "axios"

// import SuperAgent from "superagent"

const Methods = {fetch:"fetch",axios:"axios","websocket":"websocket"}

class FetchApi{
    // get("/vue-cli-server/data/IndexMostPopular", function (request, response) {
    //     var data = require('./data/IndexMostPopular.json');//要获取的json文件
    //     response.send(data);
    // })
    get(url,cb){
       console.log(url);
      // fetch("datas/news.json").then(res=>{
      //     res.json().then(data=>{
      //         console.log(data)
      //         cb(data)
      //     })
      //     console.log(res)
      // })
    }
}

class AxiosApi {
    get(url,cb){
        console.log("axios");
        Axios.get(url).then(res=>{
            cb(res.data)
            console.log(res.data)
        })
    }
}


function ApiFactory(opts) {
    switch (opts) {
        case Methods.fetch:
            return new FetchApi()
            break;
        case Methods.axios:
            return new AxiosApi()
            break;
        case Methods.websocket:
            break;
        default:
            return new FetchApi()
            break;
    }
}


export default ApiFactory(Methods.fetch)
