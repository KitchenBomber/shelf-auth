import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects'; 


function* watcher() {
    yield takeEvery('FETCH_ITEMS', fetchItem);
}

function* fetchItem() {  //action
    try{
        const response = yield axios.get('/api/shelf')
        yield put({type: "SET_ITEMS" , payload: response.data})
    }catch(error) {
        console.log(error);
        
    }
    
}

export default watcher;

// '/api/shelf'