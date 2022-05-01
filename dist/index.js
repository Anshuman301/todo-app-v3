import React from "../snowpack/pkg/react.js";
import {ChakraProvider, ColorModeScript} from "../snowpack/pkg/@chakra-ui/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import App from "./App.js";
import theme from "./theme/index.theme.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(ChakraProvider, {
  theme
}, /* @__PURE__ */ React.createElement(ColorModeScript, {
  initialColorMode: theme.config.initialColorMode
}), /* @__PURE__ */ React.createElement(App, null))), document.getElementById("root"));
