import { Typewriter } from 'react-simple-typewriter';
import { Cuadro } from './cuadro';
import { useEffect, useState } from 'react';




const CardMotor = ({
  nombre,
  descripcion,
  imagenUrl,
  origen,
  paginaOficial,
  paradigma,
  tipo,
  lenguaje,
  licencia,
  caracteristicas
}) => {
  
  return (
    <div className="cardMotor" >
      <img
        src={imagenUrl}
        alt={nombre}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginRight: "1.5em",
          border: "4px solid green",
          borderRadius: "8px",
          background: "#fff",
          flexShrink: 0
        }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ color: "aquamarine", marginBottom: "0.5em" }}>{nombre}</h3>
        <p style={{ fontSize: "14px", textAlign: "left", marginBottom: "0.5em" }}>{descripcion}</p>
        <div style={{ fontSize: "13px", marginBottom: "0.5em" }}>
          <strong>Origen:</strong> {origen}<br />
          <strong>Tipo:</strong> {tipo}<br />
          <strong>Lenguaje:</strong> {lenguaje}<br />
          <strong>Paradigma:</strong> {paradigma}<br />
          <strong>Licencia:</strong> {licencia}
        </div>
       
        
        <ul style={{ fontSize: "13px", paddingLeft: "18px", margin: "0.5em 0 0 0" }}>
          <strong>Caracteristicas:</strong><br />
          {caracteristicas.map((carac, idx) => (
            <li key={idx}>{carac}</li>
          ))}
        </ul>
         <a
          href={paginaOficial}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "aquamarine",
            textDecoration: "underline",
            fontSize: "13px",
            marginBottom: "0.5em"
          }}
        >
          Página oficial
        </a>
      </div>
    </div>
  );
}







export const Motores = () => {


  const motoresModernos = [
  {
    nombre: "React",
    descripcion: "Biblioteca de JavaScript para construir interfaces de usuario.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    origen: "Facebook",
    paginaOficial: "https://react.dev/",
    paradigma: "Declarativo, basado en componentes",
    tipo: "Biblioteca",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Virtual DOM","JSX","Unidireccional","Componentes reutilizables","Ecosistema amplio"],
  },
  {
    nombre: "Angular",
    descripcion: "Framework de desarrollo web de código abierto basado en TypeScript.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    origen: "Google",
    paginaOficial: "https://angular.io/",
    paradigma: "Declarativo, basado en componentes",
    tipo: "Framework",
    lenguaje: "TypeScript",
    licencia: "MIT",
    caracteristicas: ["Two-way data binding","Inyección de dependencias","CLI robusta","Componentes reutilizables","Ecosistema amplio"],
  },
  {
    nombre: "Vue.js",
    descripcion: "Framework progresivo de JavaScript para construir interfaces de usuario.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    origen: "Evan You",
    paginaOficial: "https://vuejs.org/",
    paradigma: "Declarativo, basado en componentes",
    tipo: "Framework",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Virtual DOM","Reactividad","Componentes reutilizables","Ecosistema modular","Fácil integración"],
  },
  {
    nombre: "Svelte",
    descripcion: "Framework de JavaScript para construir interfaces de usuario reactivas y eficientes.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    origen: "Rich Harris",
    paginaOficial: "https://svelte.dev/",
    paradigma: "Declarativo, basado en componentes",
    tipo: "Framework",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Compilación en tiempo de construcción","Reactividad","Componentes reutilizables","Tamaño reducido","Alto rendimiento"],
  }
];

 const motoresViejos = [
  {
    nombre: "Django",
    descripcion: "Framework web de alto nivel para desarrollar aplicaciones web rápidas y seguras con Python.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
    origen: "Adrian Holovaty y Simon Willison",
    paginaOficial: "https://www.djangoproject.com/",
    paradigma: "MVC (Model-View-Controller)",
    tipo: "Framework",
    lenguaje: "Python",
    licencia: "BSD",
    caracteristicas: ["ORM potente","Sistema de plantillas","Autenticación y autorización","Admin automático","Comunidad activa"],
  },
  {
    nombre: ".NET Core",
    descripcion: "Plataforma de desarrollo de código abierto para construir aplicaciones modernas y escalables.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    origen: "Microsoft",
    paginaOficial: "https://dotnet.microsoft.com/",
    paradigma: "Multiparadigma",
    tipo: "Framework",
    lenguaje: "C#",
    licencia: "MIT",
    caracteristicas: ["Multiplataforma","Alto rendimiento","Lenguaje moderno","Ecosistema amplio","Soporte para contenedores"],
  },
  {
    nombre: "Backbone.js",
    descripcion: "Framework ligero de JavaScript para construir aplicaciones web estructuradas.",
    imagenUrl: "https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9df03f9d512676337947.jpg",
    origen: "Jeremy Ashkenas",
    paginaOficial: "https://backbonejs.org/",
    paradigma: "MVC (Model-View-Controller)",
    tipo: "Framework",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Estructura MVC","Eventos","Sincronización con el servidor","Componentes reutilizables","Ligero y flexible"], 
  },
  {
    nombre: "Ember.js",
    descripcion: "Framework de JavaScript para construir aplicaciones web ambiciosas y escalables.",
    imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwlpysC69HjkotXNOCwgwWCMjjCgRfr6uow&s",
    origen: "Yehuda Katz",
    paginaOficial: "https://emberjs.com/",
    paradigma: "Declarativo, basado en componentes",
    tipo: "Framework",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Convención sobre configuración","Enrutamiento avanzado","Data binding","Componentes reutilizables","Ecosistema robusto"],
  },
  {
    nombre: "Express.js",
    descripcion: "Framework minimalista de Node.js para construir aplicaciones web y APIs.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    origen: "TJ Holowaychuk",
    paginaOficial: "https://expressjs.com/",
    paradigma: "Middleware, basado en rutas",
    tipo: "Framework",
    lenguaje: "JavaScript",
    licencia: "MIT",
    caracteristicas: ["Rutas y middleware","Manejo de solicitudes y respuestas","Integración con bases de datos","Flexible y extensible","Comunidad activa"],
  },
  {
    nombre: "Ruby on Rails",
    descripcion: "Framework web de código abierto para construir aplicaciones web con Ruby.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
    origen: "David Heinemeier Hansson",
    paginaOficial: "https://rubyonrails.org/",
    paradigma: "MVC (Model-View-Controller)",
    tipo: "Framework",
    lenguaje: "Ruby",
    licencia: "MIT",
    caracteristicas: ["Convención sobre configuración","ORM potente","Sistema de plantillas","Comunidad activa","Gemas y plugins"],
  },
  {
    nombre: "Laravel",
    descripcion: "Framework web de código abierto para construir aplicaciones web con PHP.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    origen: "Taylor Otwell",
    paginaOficial: "https://laravel.com/",
    paradigma: "MVC (Model-View-Controller)",
    tipo: "Framework",
    lenguaje: "PHP",
    licencia: "MIT",
    caracteristicas: ["Eloquent ORM","Sistema de plantillas Blade","Rutas y middleware","Autenticación y autorización","Comunidad activa"],
  },
  {
    nombre: "Spring",
    descripcion: "Framework de desarrollo de aplicaciones empresariales para Java.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    origen: "Rod Johnson",
    paginaOficial: "https://spring.io/",
    paradigma: "Inversión de control, programación orientada a aspectos",
    tipo: "Framework",
    lenguaje: "Java",
    licencia: "Apache 2.0",
    caracteristicas: ["Inyección de dependencias","Programación orientada a aspectos","MVC (Model-View-Controller)","Seguridad","Comunidad activa"], 
  },
  {
    nombre: "ASP.NET",
    descripcion: "Framework de desarrollo web de código abierto para construir aplicaciones web con .NET.",
    imagenUrl: "https://www.aprender21.com.ar/images/colaboradores/asp.png",
    origen: "Microsoft",
    paginaOficial: "https://dotnet.microsoft.com/apps/aspnet",
    paradigma: "MVC (Model-View-Controller), Web API",
    tipo: "Framework",
    lenguaje: ".NET (C#)",
    licencia: "Apache 2.0",
    caracteristicas: ["MVC (Model-View-Controller)","Web API","Razor Pages","Autenticación y autorización","Comunidad activa"],  
  },
  {
    nombre: "Flask",
    descripcion: "Microframework web de Python para construir aplicaciones web ligeras y flexibles.",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
    origen: "Armin Ronacher",
    paginaOficial: "https://flask.palletsprojects.com/",
    paradigma: "Microframework, basado en rutas",
    tipo: "Framework",
    lenguaje: "Python",
    licencia: "BSD", 
    caracteristicas: ["Ligero y flexible","Rutas y vistas","Integración con bases de datos","Extensible con plugins","Comunidad activa"],
  }
];


const [palabraBuscada,setPalabraBuscada]=useState("");

const HandleChange=(e)=>{
  console.log("",e.target.value)
  setPalabraBuscada(e.target.value)
}
  
const motoresFiltrados = [...motoresModernos,...motoresViejos].filter((motor) =>
  motor.nombre.toLowerCase().includes(palabraBuscada.toLowerCase())
);


  return (
    <>
     
    
   
    <div style={{ dislapy:"flex",flexDirection:"column",justifyContent:"center",width:"100%",alignItems:"center"   }}>
     
      <div className="inputBuscar">
        <input type="text" placeholder="Ingrese nombre de algún motor" value={palabraBuscada} onChange={HandleChange} />
        <span className="icono">🔍</span>
      </div>

      { motoresFiltrados.length>0 && palabraBuscada!="" ? ( <div className="contenedorCards" style={{ marginTop: "1em" }}>  
      
      {motoresFiltrados.map((motor, index)=>(
        <CardMotor
        key={index}
        nombre={motor.nombre}
        descripcion={motor.descripcion}
        imagenUrl={motor.imagenUrl}
        origen={motor.origen}
        paginaOficial={motor.paginaOficial}
        paradigma={motor.paradigma}
        tipo={motor.tipo}
        lenguaje={motor.lenguaje}
        licencia={motor.licencia}
        caracteristicas={motor.caracteristicas}
        ></CardMotor>
      )) }  
      

      </div>) : (<div>  <h1 style={{ fontSize: "2.5rem", fontFamily:"-moz-initial",textAlign:"center",marginBottom:"1em" , marginTop:"1em",color: "aliceblue",textShadow: "0 0 10px aquamarine" }}>
          <Typewriter
            words={['Motores de Vistas Modernos', 'React', 'Angular', 'Vue', 'Svelte']}
            loop={true}
            cursor
            cursorStyle=' | '
            typeSpeed={170}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </h1>
 
    
      <div className="contenedorCards" style={{ marginTop: "1em" }}>  
      
      {motoresModernos.map((motor, index)=>(
        <CardMotor
        key={index}
        nombre={motor.nombre}
        descripcion={motor.descripcion}
        imagenUrl={motor.imagenUrl}
        origen={motor.origen}
        paginaOficial={motor.paginaOficial}
        paradigma={motor.paradigma}
        tipo={motor.tipo}
        lenguaje={motor.lenguaje}
        licencia={motor.licencia}
        caracteristicas={motor.caracteristicas}
        ></CardMotor>
      )) }  
      

      </div>

 <h1 style={{ fontSize: "2.5rem", fontFamily:"-moz-initial",textAlign:"center", color: "aliceblue",textShadow: "0 0 10px aquamarine", marginTop:"1em"  }}>
      <Typewriter
       words={["Motores Clasicos","Django", ".NET Core", "Backbone.js", "Ember.js", "Express.js", "Ruby on Rails", "Laravel", "Spring", "ASP.NET", "Flask"]}
        loop={true}
        cursor
        cursorStyle=' | '
        typeSpeed={170}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </h1>

     <div className="contenedorCards" style={{ marginTop: "1em" }}>  
    
    {motoresViejos.map((motor, index)=>(
      <CardMotor
      key={index}
      nombre={motor.nombre}
      descripcion={motor.descripcion}
      imagenUrl={motor.imagenUrl}
      origen={motor.origen}
      paginaOficial={motor.paginaOficial}
      paradigma={motor.paradigma}
      tipo={motor.tipo}
      lenguaje={motor.lenguaje}
      licencia={motor.licencia}
      caracteristicas={motor.caracteristicas}
      ></CardMotor>
    )) }  
    

    </div></div>) }



     
    

    <div>
    <Cuadro motores={[...motoresModernos, ...motoresViejos]} />
   </div>
   
    </div>

    </>
  )
}














