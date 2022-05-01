import { Button, List, ListItem, Text } from "@chakra-ui/react";
import { pxToAll } from "../utils/theme.utils.js";

const resetFilter = {
  isFilter: false,
  filterOn: [],
};
export default function TodoList({ todoList, handleClick }) {
  const [filterData, setFilterData] = React.useState(resetFilter);
  const filterTodoList = todoList.filter((todoObj) => {
    const isTuthy = filterData.filterOn.map((value) =>
      todoObj.todo.includes(value)
    );
    return isTuthy.every((value) => value);
  });
  return (
    <React.Fragment>
      {" "}
      {filterData.isFilter && (
        <Button onClick={() => setFilterData(resetFilter)} mt={pxToAll(20)}>
          Remove Filter
        </Button>
      )}
      <List mt={pxToAll(20)}>
        {filterTodoList.map(({ ...rest }, idx) => (
          <Item
            key={idx}
            {...rest}
            handleClick={handleClick}
            handleFilterClick={(filterHash) =>
              setFilterData((prev) => ({
                isFilter: true,
                filterOn: [...prev.filterOn, filterHash],
              }))
            }
          />
        ))}
      </List>
    </React.Fragment>
  );
}

function Item({ todo, isCompleted, handleClick, handleFilterClick }) {
  const getText = () => {
    const array = [...todo.matchAll(/[#][\w]+/g)];
    const ele = [];
    if (array.length) {
      for (let i = 0; i < array.length; i += 1) {
        if (i == 0) {
          ele.push(<span>{todo.substring(0, array[i]["index"])}</span>);
        } else {
          ele.push(
            <span>
              {todo.substring(
                array[i - 1][0].length + array[i - 1]["index"],
                array[i]["index"]
              )}
            </span>
          );
        }
        ele.push(
          <span
            style={{ color: "blue" }}
            onClick={(e) => {
              e.stopPropagation();
              handleFilterClick(array[i][0]);
            }}
          >
            {array[i][0]}
          </span>
        );
      }
      ele.push(
        <span>
          {todo.substring(
            array[array.length - 1][0].length + array[array.length - 1]["index"]
          )}
        </span>
      );
    } else {
      ele.push(<span>{todo}</span>);
    }
    return ele;
  };
  return (
    <ListItem
      onClick={() => {
        if (!isCompleted) handleClick(todo);
      }}
      textDecorationLine={isCompleted ? "line-through" : "none"}
      padding={pxToAll(10)}
    >
      {getText()}
    </ListItem>
  );
}
