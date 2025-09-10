import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const Crono = () => {
  const timeline = [
    {
      year: "1990–2005",
      name: "HTML + JS",
      logo: <i className="devicon-html5-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Imperativo, recarga total",
      motive: "Sitios estáticos",
      description: "Páginas web estáticas, manipulación imperativa del DOM. Difícil de mantener y escalar.",
      resumen: "En esta época, la web consistía principalmente en páginas estáticas escritas en HTML y JavaScript plano. La interactividad era limitada y cualquier cambio requería recargar toda la página. El mantenimiento y la escalabilidad eran grandes desafíos, lo que motivó la búsqueda de soluciones más dinámicas."
    },
    {
      year: "2006",
      name: "jQuery",
      logo: <i className="devicon-jquery-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Simplificar DOM y AJAX",
      motive: "Web más interactiva",
      description: "Simplifica el DOM, animaciones y AJAX. Permite manejar aplicaciones más grandes.",
      resumen: "La llegada de jQuery revolucionó el desarrollo frontend al simplificar la manipulación del DOM, las animaciones y las llamadas AJAX. Esto permitió crear sitios web mucho más interactivos y facilitó el desarrollo de aplicaciones más complejas, aunque la estructura seguía siendo limitada."
    },
    {
      year: "2010",
      name: "Backbone.js",
      logo: <i className="devicon-backbonejs-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "MVC ligero",
      motive: "Estructurar apps grandes",
      description: "Estructura MVC básica para organizar aplicaciones frontend.",
      resumen: "Con el crecimiento de las aplicaciones web, surgió la necesidad de una mejor organización. Backbone.js introdujo el patrón MVC al frontend, permitiendo separar la lógica de negocio de la presentación y facilitando el mantenimiento de aplicaciones grandes."
    },
    {
      year: "2010",
      name: "AngularJS",
      logo: <i className="devicon-angularjs-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Binding bidireccional + plantillas",
      motive: "Automatizar sincronía vista-modelo",
      description: "Binding bidireccional y plantillas declarativas para sincronizar datos y vistas.",
      resumen: "AngularJS llevó la estructura un paso más allá, introduciendo el binding bidireccional y las plantillas declarativas. Esto automatizó la sincronización entre los datos y la vista, reduciendo la cantidad de código necesario y mejorando la productividad del desarrollador."
    },
    {
      year: "2013",
      name: "React",
      logo: <i className="devicon-react-original colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Virtual DOM + unidireccional",
      motive: "Escalabilidad y rendimiento",
      description: "Virtual DOM, JSX y flujo de datos unidireccional. Mejor escalabilidad y rendimiento.",
      resumen: "React cambió el paradigma del desarrollo frontend con el Virtual DOM y el flujo de datos unidireccional. Esto permitió construir interfaces de usuario altamente eficientes y escalables, facilitando la creación de aplicaciones complejas y mejorando el rendimiento."
    },
    {
      year: "2014",
      name: "Vue.js",
      logo: <i className="devicon-vuejs-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Reactividad fácil + plantillas",
      motive: "Combinar simplicidad y potencia",
      description: "Reactividad sencilla y plantillas declarativas. Combina lo mejor de Angular y React.",
      resumen: "Vue.js se posicionó como una alternativa ligera y flexible, combinando la reactividad y las plantillas declarativas de Angular y React. Su facilidad de integración y curva de aprendizaje baja lo hicieron popular entre desarrolladores y startups."
    },
    {
      year: "2019",
      name: "Svelte",
      logo: <i className="devicon-svelte-plain colored" style={{fontSize:"2rem",marginRight:"0.5em"}}></i>,
      philosophy: "Compilación a JS puro",
      motive: "Optimizar rendimiento",
      description: "Compila componentes a JavaScript puro para máxima eficiencia y rendimiento.",
      resumen: "Svelte introdujo una nueva filosofía: en vez de ejecutar un framework en el navegador, compila los componentes a JavaScript puro en tiempo de desarrollo. Esto reduce el tamaño y mejora el rendimiento de las aplicaciones, marcando una tendencia hacia frameworks más eficientes."
    },
  ];

  return (
    <div style={{
      maxWidth: "800px",
      margin: "1.5em auto",
      padding: "1.5em",
      background: "#222a",
      borderRadius: "16px",
      boxShadow: "0 2px 12px #0006",
      color: "aliceblue"
    }}>



  <h1 style={{ fontSize: "2.5rem", fontFamily:"-moz-initial",textAlign:"center", color: "aliceblue",textShadow: "0 0 10px aquamarine" }}>
      <Typewriter
        words={[' Cronología de los motores de vistas y frameworks frontend']}
        loop={true}
        cursor
        cursorStyle=' | '
        typeSpeed={170}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </h1>

    


      <div>
        {timeline.map((item, idx) => (
          <div key={idx} className="crono-epoca">
            <div style={{flexShrink: 0}}>{item.logo}</div>
            <div>
              <div className="crono-title">
                {item.year} — {item.name}
              </div>
              <div style={{fontStyle: "italic", color: "aquamarine", marginBottom: "0.3em"}}>
                {item.resumen}
              </div>
              <div style={{fontSize: "0.95em", marginBottom: "0.2em"}}>
                <strong>Filosofía:</strong> {item.philosophy}
              </div>
              <div style={{fontSize: "0.95em", marginBottom: "0.2em"}}>
                <strong>Motivo:</strong> {item.motive}
              </div>
              <div style={{fontSize: "0.95em", opacity: 0.8}}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 style={{
        fontSize: "1.3rem",
        fontWeight: "bold",
        marginTop: "2em",
        marginBottom: "0.7em",
        color: "aquamarine"
      }}>
        Tendencias actuales
      </h3>
      <ul style={{paddingLeft: "1.5em"}}>
        <li>
          <i className="devicon-react-original colored" style={{fontSize:"1.5rem",marginRight:"0.3em"}}></i>
          <strong>React:</strong> lidera en proyectos grandes y corporativos.
        </li>
        <li>
          <i className="devicon-vuejs-plain colored" style={{fontSize:"1.5rem",marginRight:"0.3em"}}></i>
          <strong>Vue:</strong> popular en startups y comunidades independientes por su simplicidad.
        </li>
        <li>
          <i className="devicon-svelte-plain colored" style={{fontSize:"1.5rem",marginRight:"0.3em"}}></i>
          <strong>Svelte, Solid.js, Qwik:</strong> exploran nuevas ideas de rendimiento y renderizado, marcando el futuro del frontend.
        </li>
      </ul>
    </div>
  );
}

