import React from 'react';
import "../styles/styles.scss"
import Formulario from "./Pages/Formulario"
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './Organisms/MainMenu';
import Historial from './Pages/Historial';
import Home from './Pages/Home';
import Users from './Pages/Users';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos" 
        component={ Courses }/>
        <Route path="/historial/:valor" component={ Historial } />
        <Route path="/usuarios" component={ Users } />
        <Route path="/formulario" component={() => <Formulario  name=""/>} />
        <Route component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )}/>
    </Switch>
  </ Router>
)

export default App;
