import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./app/store";
import "./index.css";
import ToggleColorMode from "./utils/ToggleColorMode";

ReactDom.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,

  document.getElementById("root")
);
