import { useContext } from "react";

// Importamos el context al que vamos a acceder.
import { Context } from "./App";

function Button({ props }) {

    // Accede al contexto que le especifiquemos.
    const context = useContext(Context);
    const theme = context.theme;
    // const darkTheme = context.dark;
    // const ligthTheme = context.light;

    const changeTheme = () => {

        if (theme.backgroundColor === 'black')
            context.setState(context.themes.light);
        else
            context.setState(context.themes.dark);
    }

    return (
        <button style={theme} onClick={changeTheme}>
            Click me!
        </button>
    );
}

export default Button;