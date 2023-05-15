import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UsersProvider>
        <App />
      </UsersProvider>
    </React.StrictMode>
  </BrowserRouter>
);
