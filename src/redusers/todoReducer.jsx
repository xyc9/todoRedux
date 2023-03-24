import {
    FETCH_TODO_LIST_REQUEST,
    FETCH_TODO_LIST_SUCCESS,
    FETCH_TODO_LIST_FAILURE, UPDATE_TODO_STATUS
} from '../action';

const initialState = {
    todoList: [],
    error: null,
    page: 1,
};


function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODO_LIST_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoList: [...state.todoList, ...action.payload.todoList],
            };
        case FETCH_TODO_LIST_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        case UPDATE_TODO_STATUS:
            const updatedToDoList = state.todoList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
            return {
                ...state,
                todoList: updatedToDoList,
            };
        default:
            return state;
    }
}

export default todoReducer;