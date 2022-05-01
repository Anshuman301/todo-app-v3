import React from "../_snowpack/pkg/react.js";
import {Flex, Text} from "../_snowpack/pkg/@chakra-ui/react.js";
import InputTodo from "./components/InputTodo.js";
import TodoList from "./components/TodoList.js";
export default function App() {
  const [todoList, setTodoList] = React.useState(() => {
    const res = localStorage.getItem("todos");
    if (res != null) {
      const obj = JSON.parse(res);
      return obj.todos;
    }
    return [];
  });
  const handleTodoCompletion = (todoName) => {
    console.log(todoName);
    const findIdx = todoList.findIndex((todoObj) => todoObj.todo === todoName && !todoObj.isCompleted);
    console.log(findIdx);
    setTodoList([
      ...todoList.slice(0, findIdx),
      {
        ...todoList[findIdx],
        isCompleted: true,
        updatedAt: new Date()
      },
      ...todoList.slice(findIdx + 1)
    ]);
  };
  const s1 = todoList.filter((todo) => !todo.isCompleted).sort((a, b) => b.updatedAt - a.updatedAt);
  const s2 = todoList.filter((todo) => todo.isCompleted).sort((a, b) => b.updatedAt - a.updatedAt);
  return /* @__PURE__ */ React.createElement(Flex, {
    direction: "column",
    height: "100vh",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Text, {
    textStyle: "h4"
  }, "Todo App"), /* @__PURE__ */ React.createElement(InputTodo, {
    getTodo: (todo) => {
      setTodoList((prev) => {
        localStorage.setItem("todos", JSON.stringify({todos: [todo, ...prev]}));
        return [todo, ...prev];
      });
    },
    handleReset: () => {
      setTodoList([]);
      localStorage.setItem("todos", JSON.stringify({todos: []}));
    }
  }), /* @__PURE__ */ React.createElement(TodoList, {
    todoList: [...s1, ...s2],
    handleClick: handleTodoCompletion
  }));
}
