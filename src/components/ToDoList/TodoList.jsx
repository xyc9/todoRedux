import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Checkbox, List, ListItem, ListItemText} from '@mui/material';
import {fetchTodoListRequest, UPDATE_TODO_STATUS} from '../../action';


function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);

    useEffect(() => {
        dispatch(fetchTodoListRequest());
    }, [dispatch]);


    const updateStatus = (id, completed) => {
        return {
            type: UPDATE_TODO_STATUS, id: id, completed: !completed
        }
    }

    return (<>

            <List dense sx={{width: '30%', bgcolor: "background.paper", margin: "0 auto"}}>
                {todoList.map((item) => (
                    <ListItem onClick={() => dispatch(updateStatus(item.id, item.completed))} key={item.id}
                              sx={{margin: '10px', border: "1px solid black", cursor: "pointer"}}>
                        <Checkbox checked={item.completed}/>
                        <ListItemText sx={item.completed ? {textDecoration: "line-through"} : null}
                                      primary={item.title}/>
                    </ListItem>
                ))}


            </List>
        </>
    );
}

export default TodoList;