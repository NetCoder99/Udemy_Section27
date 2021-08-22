import React, {useContext} from 'react';

import classes from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../store/todo-context';

const TodoList: React.FC = () => {
    const TodoCtx = useContext(TodoContext);
    return (
        <ul className={classes.todos} >
            {TodoCtx.items.map(item=> <TodoListItem onDelTodo={TodoCtx.delTodoItem} key={item.id} item={item}/>)}
        </ul>
    );
}

export default TodoList;
