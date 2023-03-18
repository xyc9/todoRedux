const ADD_NEW_TODO = 'ADD_NEW_TODO';
const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';

let initialState = {
    toDoList: [
        {
            title: "Smth very important",
            id: 1,
            done: false,
        },
        {
            title: "Another very important thing",
            id: 2,
            done: false,
        },
        {
            title: "Ordinary thing",
            id: 3,
            done: true,
        }
    ],
    newToDO : null
}

let listReducer = (state = initialState,action) => {
    switch (action.type){

        case ADD_NEW_TODO :
            let text = state.newToDO;
            if (text != null){
                return {
                    ...state,
                    toDoList : [...state.toDoList , {id: state.toDoList.length+1 , title: text, done: false}] ,
                    newToDO : '',
                };
            }else {
                alert("Please fill in the field ")
            };

        case UPDATE_NEW_TODO_TEXT :
            return {
                ...state,
                newToDO : action.NewToDoText
            };
        case UPDATE_TODO_STATUS:
            const updatedToDoList = state.toDoList.map((item) => {
                if (item.id === action.id) {
                    return { ...item, done: !item.done };
                }
                return item;
            });

            return {
                ...state,
                toDoList: updatedToDoList,
            };
        default:
            return state;
    }
}
export default listReducer