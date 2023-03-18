import React from "react";
import {useDispatch, useSelector} from "react-redux";

const NewToDo = () => {
    let newToDOText = useSelector(state => state.newToDO)
    const dispatch = useDispatch();
    const addNewTodo = {type: "ADD_NEW_TODO"}
    const updateNewTodoText = (e) => {
        return {
            type: "UPDATE_NEW_TODO_TEXT",
            NewToDoText: e.target.value
        }
    }

    return (
        <div className="NewToDo">
            <h3>Add New Todo</h3>
            <div className="NewToDo__field">

                <input type="text" value={newToDOText} onChange={(e) =>dispatch(updateNewTodoText(e))}/>
                <button onClick={()=>dispatch(addNewTodo)}>Send</button>
            </div>
        </div>

    )
}
export default NewToDo