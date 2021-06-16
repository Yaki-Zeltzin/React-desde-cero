import React from 'react'
import PropTypes from 'prop-types'


const Curso = ({title, image, price, profesor}) =>(
  <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt={title} />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
   <h3 className="center">{ title }</h3>
   <div className="s-main-center">
        {`Prof.: ${profesor}`}
   </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team">{ price }</a>
    </div>
  </div>
</article>
)

//se esta esperando
Curso.propTypes = {
     title: PropTypes.string,
     image: PropTypes.string,
     price: PropTypes.number,
     profesor: PropTypes.string,
}
//si no se recibe nada , toma esto por default
Curso.defaultProps = {
     title: "No se encontro título",
     image: "https://ed.team/static/images/logo/logo-premium-alt.svg",
     price: "--",
     profesor: "",
}

export default Curso