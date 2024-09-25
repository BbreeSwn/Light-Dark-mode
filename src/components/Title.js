import Switch from "react-switch";
import { useContext, useState } from "react";
import { themeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(themeContext);

  const toggleMode = (checked) => {
    setTheme(checked);
  };
  return (
    <header>
      <span>Mode ({theme})</span>
      <Switch onChange={toggleMode} checked={theme} />
    </header>
  );
};

export default Title;
