import { ThemeProvider as Provider } from "styled-components";
import { theme } from "./theme";
import { useContext } from "react";
import { ThemeSwitchContext } from "../../context/ThemeSwitchContext";

export const ThemeProvider = ({ children }) => {
  const { themeSwitch } = useContext(ThemeSwitchContext);
  console.log(themeSwitch);
  return (
    <Provider theme={themeSwitch ? theme.dark : theme.light}>
      {children}
    </Provider>
  );
};
