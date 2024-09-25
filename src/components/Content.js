import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { themeContext } from "../App";
import {useContext} from 'react'

const Content = () => {
    const {theme} = useContext(themeContext)
  return (
    <main className={theme === "dark"? "dark" : "light"} >
      <div>
        <h1>Suwanan Sangpisarn</h1>
        <p>Toggle mode project</p>
      </div>
         <img src={theme === "dark" ? dark : light } alt="Logo" />
    </main>
  );
};

export default Content;
