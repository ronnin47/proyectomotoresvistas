import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';




 

   



export const Logos = () => {

 const logos = [
    { clase: "devicon-svelte-plain colored motorLogo", nombre: "Svelte", link: "https://svelte.dev/" },
    { clase: "devicon-backbonejs-plain colored motorLogo", nombre: "Backbone.js", link: "https://backbonejs.org/" },
    { clase: "devicon-angularjs-plain colored motorLogo", nombre: "Angular", link: "https://angular.io/" },
    { clase: "devicon-react-original colored motorLogo", nombre: "React", link: "https://react.dev/" },
    { clase: "devicon-vuejs-plain colored motorLogo", nombre: "Vue.js", link: "https://vuejs.org/" },
    { clase: "devicon-django-plain colored motorLogo", nombre: "Django", link: "https://www.djangoproject.com/" },
    { clase: "devicon-dotnetcore-plain colored motorLogo", nombre: ".NET Core", link: "https://dotnet.microsoft.com/" },
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
          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <i
              className={logo.clase}
              style={{
                fontSize: "0.8em",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.filter = "brightness(1.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            ></i>
          </a>
        </OverlayTrigger>
      ))}
    </div>
  </>
);
}


