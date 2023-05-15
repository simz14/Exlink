import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext.jsx";

import { ThemeProvider } from "./utils/themes/ThemeProvider.jsx";
import { ThemeSwitchProvider } from "./context/ThemeSwitchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeSwitchProvider>
        <ThemeProvider>
          <UsersProvider>
            <App />
          </UsersProvider>
        </ThemeProvider>
      </ThemeSwitchProvider>
    </React.StrictMode>
  </BrowserRouter>
);
