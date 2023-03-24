import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import {fetchTodoListRequest, UPDATE_TODO_STATUS} from "../../action";

import "./ToDoList.css"



function TodoList() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const todoList = useSelector((state) => state.todoList);

    useEffect(() => {
        dispatch(fetchTodoListRequest(page));
    }, [dispatch, page]);

    const handleScroll = (event) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight){
            setPage(page + 1 )
        }
    };

    const handleChangeStatus = (item) => {
        return {
            type: UPDATE_TODO_STATUS, id: item.id, completed: !item.completed
        }
    }
    return (
        <TableContainer className="table__container"
            onScroll={handleScroll}
        >
            <Table sx={{minWidth: 650}} stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todoList.map((item) => (
                        <TableRow
                            key={item.id + 99999999}
                            sx={{cursor: "pointer"}}
                            onClick={() => dispatch(handleChangeStatus(item))}
                        >
                            <TableCell component="th" scope="row" className={item.completed ? "doneTodo" : ""}>
                                <p className="table__title">{item.title}</p>
                            </TableCell>
                            <TableCell align="right">
                                <Checkbox checked={item.completed}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TodoList;
