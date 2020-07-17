import React, { Component } from 'react';

// import Parrafo from './components/Parrafo.jsx'
// import Eventos from './components/Eventos.jsx';
// import Contador from './components/Contador.jsx';
import Listas from './components/Listas.jsx';
import Formulario from './components/Formulario.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola Mundo React</h1>
        {/* <  Parrafo />
        < Eventos />
        <Contador /> 
        <Listas /> */ }
        <Formulario />
      </div>
    );
  }
}


export default App;  
 
