import React from 'react';

import './App.css';

import Button from './Button';

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
  return (
    <div>
      {
        /**
         * Todos los hijos del componente Context van a compartir la
         * informacion que este asignada en el contexto. Para asignar
         * informacion al contexto usamos el prop value.
         */
      }
      <Context.Provider value={themes.dark}>
        <Button />
      </Context.Provider>
    </div>
  );
}

export default App;
