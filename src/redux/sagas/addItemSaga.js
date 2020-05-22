import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


function* watcher() {
    yield takeEvery('NEW_ITEM', newItem);
}

function* newItem() {  //action
    try {
        const response = yield axios.post('/api/shelf')
        yield put({ type: "FETCH_ITEMS", payload: response.data })

        
    } catch (error) {
        console.log(error);

    }

}

export default watcher;
