import { useContext } from "react";

// Importamos el context al que vamos a acceder.
import { Context } from "./App";

function Button({ props }) {

    // Accede al contexto que le especifiquemos.
    const context = useContext(Context);
    const theme = context;
    // const darkTheme = context.dark;
    // const ligthTheme = context.light;

    return (
        <button style={theme}>
            Click me!
        </button>
    );
}

export default Button;