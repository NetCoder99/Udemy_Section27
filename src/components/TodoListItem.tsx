import React from 'react';
import classes from './TodoListItem.module.css';

import TodoModel from '../models/TodoModel';
import { BsTrash } from 'react-icons/bs';

const TodoListItem: React.FC<{onDelTodo: (todoKey: string) => void, item: TodoModel}> = (props) => {
    const clickHandler = (id: string) => {
        //event.preventDefault();
        console.log("TodoListItem.clickHandler.id:"+id) ;
        props.onDelTodo(id);
    }


    //console.log("TodoListItem.id"+props.item.id);
    return (
        <li className={classes.item}>
            <span className={classes.id}>{props.item.id}</span>
            <span>:</span>
            <span className={classes.text}>{props.item.text}</span>

            <button className={classes.trash} >
                <BsTrash onClick={() => clickHandler(props.item.id)}/>
            </button>


        </li>
    );
}

export default TodoListItem;
