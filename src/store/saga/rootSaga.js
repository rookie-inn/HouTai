import {all,takeLatest,put} from "redux-saga/effects"
function* incrementAsync(action){
   if(action.type==="uss"){
         yield put({type:"uss"})
     }else if(action.type==="zhuxiao"){
         yield put({type:"zhuxiao"})
     }else if(action.type==="isgo"){
         yield put({type:"isgo"})
     }
}
 function* watchAndActionAsyn(){
    yield takeLatest('ADD',incrementAsync);
 }
 export default function* rootSaga(){
     yield all([watchAndActionAsyn()])
 }