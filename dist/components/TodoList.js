import React from "../../_snowpack/pkg/react.js";
import {Button, List, ListItem, Text} from "../../_snowpack/pkg/@chakra-ui/react.js";
import {pxToAll} from "../utils/theme.utils.js";
const resetFilter = {
  isFilter: false,
  filterOn: []
};
export default function TodoList({todoList, handleClick}) {
  const [filterData, setFilterData] = React.useState(resetFilter);
  const filterTodoList = todoList.filter((todoObj) => {
    const isTuthy = filterData.filterOn.map((value) => todoObj.todo.includes(value));
    return isTuthy.every((value) => value);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, " ", filterData.isFilter && /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setFilterData(resetFilter),
    mt: pxToAll(20)
  }, "Remove Filter"), /* @__PURE__ */ React.createElement(List, {
    mt: pxToAll(20)
  }, filterTodoList.map(({...rest}, idx) => /* @__PURE__ */ React.createElement(Item, {
    key: idx,
    ...rest,
    handleClick,
    handleFilterClick: (filterHash) => setFilterData((prev) => ({
      isFilter: true,
      filterOn: [...prev.filterOn, filterHash]
    }))
  }))));
}
function Item({todo, isCompleted, handleClick, handleFilterClick}) {
  const getText = () => {
    const array = [...todo.matchAll(/[#][\w]+/g)];
    const ele = [];
    if (array.length) {
      for (let i = 0; i < array.length; i += 1) {
        if (i == 0) {
          ele.push(/* @__PURE__ */ React.createElement("span", null, todo.substring(0, array[i]["index"])));
        } else {
          ele.push(/* @__PURE__ */ React.createElement("span", null, todo.substring(array[i - 1][0].length + array[i - 1]["index"], array[i]["index"])));
        }
        ele.push(/* @__PURE__ */ React.createElement("span", {
          style: {color: "blue"},
          onClick: (e) => {
            e.stopPropagation();
            handleFilterClick(array[i][0]);
          }
        }, array[i][0]));
      }
      ele.push(/* @__PURE__ */ React.createElement("span", null, todo.substring(array[array.length - 1][0].length + array[array.length - 1]["index"])));
    } else {
      ele.push(/* @__PURE__ */ React.createElement("span", null, todo));
    }
    return ele;
  };
  return /* @__PURE__ */ React.createElement(ListItem, {
    onClick: () => {
      if (!isCompleted)
        handleClick(todo);
    },
    textDecorationLine: isCompleted ? "line-through" : "none",
    padding: pxToAll(10)
  }, getText());
}
