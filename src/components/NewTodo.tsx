import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodoContext } from '../store/todo-context';

const NewTodo: React.FC = () => {
    const textRef = useRef<HTMLInputElement>(null);
    const TodoCtx = useContext(TodoContext);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const crntText = textRef.current!.value;
        //console.log("NewTodo.submitHandler:" + crntText);
        if (crntText.trim().length === 0){return;}
        TodoCtx.addTodoItem(crntText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text:</label>
            <input id="text" type="text" ref={textRef}></input>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;
