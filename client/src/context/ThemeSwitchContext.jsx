import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const ThemeSwitchContext = createContext({
  themeSwitch: [],
  setThemeSwitch: () => {},
});

export const ThemeSwitchProvider = ({ children }) => {
  const [themeSwitch, setThemeSwitch] = useState(false);

  return (
    <ThemeSwitchContext.Provider value={{ themeSwitch, setThemeSwitch }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};
ThemeSwitchProvider.propTypes = {
  children: PropTypes.node,
};
