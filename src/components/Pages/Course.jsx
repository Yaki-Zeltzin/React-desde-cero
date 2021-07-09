import React from 'react'

const courses = [
     {
     "id": 1,
     "title":"React desde cero",
     "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg", 
     "price":"20",
     "profesor":"Beto Quiroga",
     }, 
     {
     "id": 2,
     "title":"SPA desde cero",
     "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
     "price":"50",
     "profesor":"Beto Quiroga",
     }, 
     {
     "id": 3,
     "title":"HTML desde cero", 
     "image": "  https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
     "price":"0",
     "profesor":"Alvaro Felipe"
     }
   ]
// match objeto que devulvve el parametro de la ruta ":id"
const Course = ({ match }) => {

     const cursoActual = courses.filter(c => c.id === parseInt(match.params.id))[0]

     return(
          <div className="ed-grid m-grid-3">
          {
           cursoActual ? (
               <>
                <h1 className="m-cols-3">{ cursoActual.title }</h1>
                <img className="m-cols-1" src={ cursoActual.image } alt={ cursoActual.title } />
                <p className="m-cols-2">{ `Profesor: ${ cursoActual.profesor }` }</p>
               </>
               ) :
               <h1>El curso no existe</h1>
          }
     </div>
)
}

export default Course