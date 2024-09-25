import Switch from "react-switch";
import { useContext, useState } from "react";
import { themeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(themeContext);

  const toggleMode = (checked) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={theme === "dark"? "dark" : "light"}>
      <span>Mode ({theme})</span>
      <Switch onChange={toggleMode} checked={theme === "dark"} />
    </header>
  );
};

export default Title;
