import Switch from "react-switch"
import {useState} from 'react'

const Title = () => {
    const [theme , setTheme] = useState(false)

const toggleMode = (checked) => {
    setTheme(checked)
}
  return (
    <header>
        <span>Mode ({theme})</span>
        <Switch
        onChange={toggleMode}
        checked = {theme}
        />
    </header>
  )
}

export default Title