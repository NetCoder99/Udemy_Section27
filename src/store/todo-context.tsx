import React from "react";
import { useState } from "react";
import TodoModel from "../models/TodoModel";

type TodoContextObj = {
  status:   string;
  items:    TodoModel[];
  setStatus:   (statusText: string) => void;
  addTodoItem: (todoText:  string) => void;
  delTodoItem: (id:        string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  status: '',
  items: [],
  setStatus:   ()   => {},
  addTodoItem: (todoText: string) => {},
  delTodoItem: (id: string)       => {},
});

const TodoContextProvider: React.FC = (props) => {
  useState();
  const [tmpTodoList, setTmpTodoList] = useState<TodoModel[]>([]);
  //const [tmpTodoList, setTmpTodoList] = useState<TodoModel[]>(todoData);

  const [statusText, setStatusText] = useState<string>("");

  const statusTextHandler = (statusText: string) => {
    console.log("App.statusTextHandler:" + statusText);
    setStatusText(statusText);
  };

  const onAddTodoHandler = (todoText: string) => {
    console.log("App.onAddTodoHandler:" + todoText);
    const newItem = new TodoModel(todoText)
    setTmpTodoList((prevArray) => {
      return [newItem, ...prevArray];
    });
    setStatusText("Todo item was added: " + newItem.id);
  };

  const onDelTodoHandler = (todoKey: string) => {
    console.log("App.onDelTodoHandler:" + todoKey);
    setTmpTodoList((prevArray) => {
      let newarray = prevArray.filter((element) => element.id !== todoKey);
      return newarray;
    });
    setStatusText("Todo item was removed: " + todoKey);
  };

  const contextValue: TodoContextObj = {
    status: statusText,
    items: tmpTodoList,
    setStatus: statusTextHandler,
    addTodoItem: onAddTodoHandler,
    delTodoItem: onDelTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
