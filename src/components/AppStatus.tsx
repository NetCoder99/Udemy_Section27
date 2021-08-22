import React, { useContext} from 'react';
import classes from './AppStatus.module.css';

import { TodoContext } from '../store/todo-context';

const AppStatus: React.FC = (props) => {
    const TodoCtx = useContext(TodoContext);
    return (
        <div className={classes.item}>
            <span>{TodoCtx.status}</span>
        </div>    
    );
}

export default AppStatus;
