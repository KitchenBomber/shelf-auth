import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* watcher() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {  //action
    try {
        console.log('action.payload', action.payload)
        
        const response = yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: "FETCH_ITEMS", payload: response.data })


    } catch (error) {
        console.log(error);

    }

}

export default watcher;
