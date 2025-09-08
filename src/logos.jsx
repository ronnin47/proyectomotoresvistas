import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



export const Logos = () => {
const logos = [
    { clase: "devicon-svelte-plain colored motorLogo", nombre: "Svelte" },
    { clase: "devicon-backbonejs-plain colored motorLogo", nombre: "Backbone.js" },
    { clase: "devicon-angularjs-plain colored motorLogo", nombre: "Angular" },
    { clase: "devicon-react-original colored motorLogo", nombre: "React" },
    { clase: "devicon-vuejs-plain colored motorLogo", nombre: "Vue.js" },
    { clase: "devicon-django-plain colored motorLogo", nombre: "Django" },
    { clase: "devicon-dotnetcore-plain colored motorLogo", nombre: ".NET Core" },
  ];

  return (
    <>
       <div className="contenedorLogos" style={{ marginTop: "1em" }}>
      {logos.map((logo, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{logo.nombre}</Tooltip>}
        >
          <i className={logo.clase}></i>
        </OverlayTrigger>
      ))}
    </div>
    </>
  )
}


