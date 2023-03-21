import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_TODO_LIST_REQUEST,
    fetchTodoListSuccess,
    fetchTodoListFailure,
} from './action';

function* fetchTodoList({ page }) {
    try {
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`);
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
