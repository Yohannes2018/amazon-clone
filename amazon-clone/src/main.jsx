import React from "react";
//import { StrictMode } from "react";
//import { createRoot } from "react-dom/client";
import ReactDOM  from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
import { reducer, initialState } from "./Utility/reducer.js";
const root = ReactDOM.createRoot(document.getElementById("root")); root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
