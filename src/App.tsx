//import React, {useEffect} from 'react';
import './App.css';
import AppStatus from './components/AppStatus';
import TodoList from './components/TodoList';
//import todoData from './data/todoData';
//import TodoModel from './models/TodoModel' ;
import NewTodo from './components/NewTodo';
//import { useState } from 'react';
import TodoContextProvider from './store/todo-context';

function App() {

  //const [tmpTodoList, setTmpTodoList] = useState<TodoModel[]>([]);
  //const [tmpTodoList, setTmpTodoList] = useState<TodoModel[]>(todoData);
  //const [statusText,  setstatusText] = useState<string>("");

  // const onAddTodoHandler = (todoText: string) => {
  //   console.log("App.onAddTodoHandler:"+todoText);
  //   setTmpTodoList((prevArray) => {
  //     return [new TodoModel(todoText), ...prevArray];
  //   });
  //   setstatusText("Todo item was added")
  // }

  // const onDelTodoHandler = (todoKey: string) => {
  //   console.log("App.onDelTodoHandler:"+todoKey);
  //   setTmpTodoList((prevArray) => {
  //     let newarray = prevArray.filter(element => element.id !== todoKey);
  //     return newarray;
  //   });
  // }

  return (
    <TodoContextProvider>
      <NewTodo></NewTodo>
      <AppStatus></AppStatus>
      <TodoList ></TodoList>
    </TodoContextProvider>
  );
}

export default App;
