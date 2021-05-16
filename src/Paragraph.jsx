import { useContext } from "react";

// Importamos el context al que vamos a acceder.
import { Context } from "./App";

function Paragraph({ props }) {

    // Accede al contexto que le especifiquemos.
    const context = useContext(Context);
    const theme = context.theme;
    // const darkTheme = context.dark;
    // const ligthTheme = context.light;

    return (
        <div style={theme}>
            <p>¡Hola Mundo!</p>
        </div>
    );
}

export default Paragraph;