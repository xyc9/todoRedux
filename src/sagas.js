import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_TODO_LIST_REQUEST,
    fetchTodoListSuccess,
    fetchTodoListFailure,
} from './action';

function* fetchTodoList(item) {

    try {
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/todos?_page=${item.page}&_limit=10`);
        const data = yield response.json();
        yield put(fetchTodoListSuccess(data));
    } catch (error) {
        yield put(fetchTodoListFailure(error));
    }
}

function* watchFetchTodoList() {
    yield takeLatest(FETCH_TODO_LIST_REQUEST, fetchTodoList);
}

export default function* todoSaga() {
    yield watchFetchTodoList();
}
