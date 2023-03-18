import React from "react";
import {useDispatch} from "react-redux";


const ListItem = (props) =>{
    const updateStatus = {type: "UPDATE_TODO_STATUS",id: props.id , status: !props.status}
    const dispatch = useDispatch();
    return(
        <div className={"list__item"}>
            <h3>{props.id}</h3>
            <p className={props.status ? "done" : ""}>{props.title}</p>
            <button className={props.status ? "done" : ""} onClick={()=>dispatch(updateStatus)}>{props.status ? "done" : "undone"}</button>
        </div>
    )
}
export default ListItem