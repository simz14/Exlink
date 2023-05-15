import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { withTheme } from "styled-components";
import { ThemeSwitchContext } from "../context/ThemeSwitchContext";

const ThemeSwitcher = () => {
  const { setThemeSwitch } = useContext(ThemeSwitchContext);
  return <Switch onClick={() => setThemeSwitch((prev) => !prev)} />;
};

export default withTheme(ThemeSwitcher);
