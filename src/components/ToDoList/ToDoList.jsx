import React from "react";
import { useSelector} from "react-redux";
import ListItem from "./ListItem";

import "./ToDoList.css"
import NewToDo from "./NewToDo";

const ToDoList = () => {
    let todoList = useSelector(state => state.toDoList)
    return (
        <>
            {todoList.map(item => {
                return (<>
                        <ListItem title={item.title} id={item.id} key={item.id} status={item.done}/>
                    </>

                )
            })}
            <NewToDo/>
        </>
    )
}
export default ToDoList