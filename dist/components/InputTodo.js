import React from "../../snowpack/pkg/react.js";
import {Box, Button, Flex, FormControl, Input} from "../../snowpack/pkg/@chakra-ui/react.js";
import {pxToAll} from "../utils/theme.utils.js";
export default function InputTodo({getTodo, handleReset}) {
  const inputRef = React.useRef(null);
  return /* @__PURE__ */ React.createElement(Flex, {
    mt: pxToAll(20),
    w: pxToAll(450),
    wrap: "nowrap",
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      getTodo({...data, isCompleted: false, updatedAt: new Date()});
      inputRef.current.value = "";
    }
  }, /* @__PURE__ */ React.createElement(FormControl, {
    isRequired: true
  }, /* @__PURE__ */ React.createElement(Input, {
    size: "md",
    name: "todo",
    ref: inputRef
  }))), /* @__PURE__ */ React.createElement(Button, {
    ml: pxToAll(20),
    onClick: handleReset
  }, "Reset"));
}
