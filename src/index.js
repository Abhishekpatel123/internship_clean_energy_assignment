import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./DefaultTheme";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  // </ThemeProvider>,
  document.getElementById("root")
);
