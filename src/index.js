import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RTL from "./components/RTL";
import { Provider } from "react-redux";
import store from "./store/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  direction: "rtl",
  fontFamily: "Shabnam",
  fontColor: "#102031",
  palette: {
    primary: {
      main: "#80316E",
    },
  },
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RTL>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RTL>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
