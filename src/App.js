import React, { useState } from 'react';

import './App.css';

import Button from './Button';
import Paragraph from './Paragraph';

// Crea el contexto para la aplicacion.
export const Context = React.createContext();

const themes = {
  'dark': {
    backgroundColor: 'black',
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }
}

function App() {

  const [theme, setState] = useState(themes.dark);

  return (
    <div>
      {
        /**
         * Todos los hijos del componente Context van a compartir la
         * informacion que este asignada en el contexto. Para asignar
         * informacion al contexto usamos el prop value.
         */
      }
      <Context.Provider value={{ themes, theme, setState }}>
        <button onClick={() => setState(themes.light)}>Modo claro</button>
        <button onClick={() => setState(themes.dark)}>Modo oscuro</button>
        <br />
        <br />
        <Button />
        <br />
        <Paragraph />
      </Context.Provider>
    </div>
  );
}

export default App;
