import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById("root") 

/* const elemento = React.createElement(componente, propiedades, hijos) */

//const elemento = React.createElement("h1", {className: "saludo"}, "hola mundo")

ReactDOM.render(<App />, root);


