import { useContext } from "react"
import { ThemeContext } from "../../services/theme/theme.context"
import { Button } from "react-bootstrap";
import { LIGHT_THEME } from "../../shared/consts/themeConsts";

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme}>
        Cambiar tema a {theme === LIGHT_THEME ? "Oscuro" : "Claro"}
    </Button>
  )
}
export default ToggleTheme