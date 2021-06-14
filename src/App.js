import React from 'react';
import "./styles/styles.scss"
import Curso from "./curso"

const cursos = [
  {
  "title":"React desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg", "price":"20",
  "profesor":"Beto Quiroga",
  }, 
  {
  "title":"SPA desde cero",
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg","price":"50",
  "profesor":"Beto Quiroga",
  }, 
  {
  "title":"HTML desde cero", 
  "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg","price":"0",
  "profesor":"Alvaro Felipe"
  }
]

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="baner" src="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de EDteam</p>
        <p> Tu futuro te está esperando</p>
        <a href="http://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  {
    cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} /> )
  }
    
  
</div>
  </>
)

export default App;
