import React from 'react'
import { Info } from './descargarInforme'


export const Conclusiones = () => {
  return (
    <div className="container">
      
      
      
      <div style={{display:"flex", flexWrap:"wrap",gap:"1em", alignItems:"center", justifyContent:"center", marginBottom:"2em", marginTop:"1em" }}>

      
        <img src="https://www.shutterstock.com/image-photo/panorama-shot-frontend-developer-team-260nw-2304027635.jpg" alt="" style={{border:"1px solid white", borderRadius:"10px",width:"70%"}} />
    
      

      <div>
           <h3 className="text-lg font-semibold mb-2">Impacto en el desarrollo de software</h3>
      <p className="mb-4">
Los motores de vistas han revolucionado la manera de construir aplicaciones, permitiendo interfaces más dinámicas, interactivas y fáciles de mantener. Gracias a ellos, es posible separar claramente la lógica de negocio de la presentación, lo que facilita la modularidad, la reutilización de componentes y la colaboración entre equipos. Esto no solo mejora la eficiencia en el desarrollo y mantenimiento, sino que también contribuye a crear aplicaciones más robustas, escalables y centradas en la experiencia del usuario, capaces de adaptarse a cambios y crecer con las necesidades del proyecto.
      </p>
      </div>

      </div>
      
      
     
        <div className="bg-gray-800/80 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-aquamarine">
          Características de los principales motores de vistas
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <i className="devicon-react-original colored text-3xl mt-1"></i>
            <p>
              <strong>React:</strong> Flexibilidad, rendimiento y un ecosistema amplio respaldado por una comunidad activa. Ideal para aplicaciones con requerimientos cambiantes y crecimiento progresivo.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <i className="devicon-angularjs-plain colored text-3xl mt-1"></i>
            <p>
              <strong>Angular:</strong> Robustez y estructura completa, adecuada para proyectos grandes y entornos corporativos que requieren escalabilidad y mantenimiento a largo plazo.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <i className="devicon-vuejs-plain colored text-3xl mt-1"></i>
            <p>
              <strong>Vue:</strong> Simplicidad y curva de aprendizaje baja, permite integraciones rápidas y desarrollo progresivo sin sacrificar funcionalidad.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex gap-2 mt-1">
              <i className="devicon-dotnetcore-plain colored text-3xl"></i>
              <i className="devicon-django-plain colored text-3xl"></i>
            </div>
            <p>
              <strong>Razor / Python (Django/Jinja2):</strong> Integración eficiente en entornos donde C# o Python dominan el backend, facilitando la coherencia entre frontend y backend en aplicaciones empresariales.
            </p>
          </li>
        </ul>
      </div>

      

     <div style={{marginTop:"2em", backgroundColor:"hsla(175, 64%, 48%, 0.50)", padding:"1em", borderRadius:"10px" }}  >
      <h3 className="text-lg font-semibold mb-2">Elección según contexto y necesidades</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Escalabilidad y robustez:</strong> <span className="text-aquamarine">Angular</span> recomendado para proyectos complejos y equipos grandes.</li>
        <li><strong>Flexibilidad y ecosistema:</strong> <span className="text-aquamarine">React</span> ideal para aplicaciones dinámicas y en constante evolución.</li>
        <li><strong>Simplicidad y progresividad:</strong> <span className="text-aquamarine">Vue</span> perfecto para proyectos medianos o donde se requiere implementación rápida.</li>
        <li><strong>Integración con entornos empresariales:</strong> <span className="text-aquamarine">Razor o Django/Jinja2</span> cuando se busca cohesión con el backend y facilidad de mantenimiento.</li>
      </ul>

     </div>
      

    




  {/* HUELLITAS FELICES & MOTORES VISTA */}
<div
  style={{
    marginTop: "2em",
    backgroundColor: "#2633509c",
    padding: "2em",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    lineHeight: "1.6",
   
    margin: "2em auto",
    fontFamily: "'Poppins', sans-serif"
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "aliceblue",
      marginBottom: "0.8em",
      fontWeight: "700"
    }}
  >
    🐾 Presentación: Opciones de Frameworks Frontend para el Módulo <br /> <span style={{ color: "#2563eb" }}>Servicios</span>
  </h2>

  {/* Sección 1 */}
  <section style={{ marginBottom: "1.5em" }}>
    <h3 style={{ color: "aliceblue", borderBottom: "2px solid #60a5fa", paddingBottom: "4px" }}>
      1. Contexto y Requisitos del Módulo Servicios
    </h3>
    <p>
      El <strong>Módulo Servicios</strong> forma parte del sistema de gestión integral de la veterinaria <strong>“Huellitas Felices”</strong>. 
      Su propósito es la gestión digital de los distintos servicios: consultas, vacunaciones y peluquería.
      Este módulo se desarrollará como una aplicación local (offline), por lo que el framework frontend 
      deberá ser <strong>robusto, eficiente y reactivo</strong> en la gestión de la interfaz.
    </p>

    <ul style={{ marginLeft: "1em" }}>
      <li>-<strong> Listado y Búsqueda Dinámica:</strong> con filtros por nombre, tipo o rango de precio.</li>
      <li>-<strong> Formularios Complejos:</strong> para registrar Nombre, Descripción, Precio estándar y Duración estimada.</li>
      <li>-<strong> Validaciones en Tiempo Real:</strong> evitando duplicaciones y valores inválidos.</li>
      <li>-<strong> Usabilidad:</strong> interfaz simple, moderna y reactiva.</li>
      <li>-<strong> Interacción:</strong> botones Nuevo, Editar, Guardar, Cancelar e indicadores de estado.</li>
    </ul>
  </section>

  {/* Sección 2 */}
  <section style={{ marginBottom: "1.5em" }}>
    <h3 style={{ color: "aliceblue", borderBottom: "2px solid #60a5fa", paddingBottom: "4px" }}>
      2. Candidatos de Frameworks/Librerías Frontend
    </h3>
    <p>
      Para construir una UI moderna y reactiva se analizan tres opciones líderes: <strong>React</strong>, <strong>Angular</strong> y <strong>Vue</strong>.
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "center", marginTop: "1em" }}>
      <div style={{ backgroundColor: "#232c35e1", padding: "1em", borderRadius: "10px", width: "250px" }}>
        <h4 >React</h4>
        <p>Librería JavaScript enfocada en la capa de vista. Ideal para interfaces rápidas y dinámicas con componentes reutilizables.</p>
      </div>

      <div style={{ backgroundColor: "#232c35e1", padding: "1em", borderRadius: "10px", width: "250px" }}>
        <h4 >Angular</h4>
        <p>Framework completo con arquitectura modular. Ideal para grandes proyectos integrados con otros módulos del sistema.</p>
      </div>

      <div style={{ backgroundColor: "#232c35e1", padding: "1em", borderRadius: "10px", width: "250px" }}>
        <h4 >Vue</h4>
        <p>Framework progresivo, flexible y de fácil aprendizaje. Excelente para desarrollos rápidos y usabilidad fluida.</p>
      </div>
    </div>
  </section>

  {/* Sección 3 */}
  <section style={{ marginBottom: "1.5em" }}>
    <h3 style={{ color: "aliceblue", borderBottom: "2px solid #60a5fa", paddingBottom: "4px" }}>
      3. Consideraciones Técnicas
    </h3>
    <p>
      El frontend se integrará con la base de datos relacional (<strong>MySQL</strong> o <strong>SQLite</strong>) para gestionar las tablas de <em>Servicios</em>, 
      <em>Servicios_Empleados</em> y <em>Servicios_Insumos</em>.  
      También deberá implementar las operaciones CRUD: creación, modificación, registro e inactivación de servicios.
    </p>
  </section>

  {/* Resumen */}
  <section>
    <h3 style={{ color: "aliceblue", borderBottom: "2px solid #60a5fa", paddingBottom: "4px" }}>
      Resumen y Recomendación Conceptual
    </h3>
    <p>
      React, Angular y Vue cumplen con los requerimientos técnicos y de usabilidad del módulo.  
      La elección dependerá de la estrategia del equipo de desarrollo y del entorno de integración.  
      Si el Módulo Servicios fuera un gran archivador digital donde se guardan las fichas de los servicios, 
      estos frameworks serían los <strong>escritorios inteligentes</strong> que permiten a los usuarios 
      interactuar con esos registros de forma rápida, clara y con mínimos errores.
    </p>
  </section>
</div>


  <div
          style={{
            marginTop: "2em",
            backgroundColor: "hsla(210, 64%, 48%, 0.50)",
            padding: "1em",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center" // 👈 esto centra horizontalmente
          }}
        >
          <h3 className="text-lg font-semibold mb-2">Reflexión final</h3>
          <p style={{ textAlign: "center" }}>
            La selección de un motor de vistas no solo depende de la tecnología en sí,
            sino del contexto del proyecto, los recursos del equipo y los objetivos a
            largo plazo. Con la elección adecuada, los motores de vistas permiten crear
            aplicaciones más eficientes, mantenibles y escalables, adaptándose a las
            necesidades del desarrollo moderno.
          </p>

          <Info />
        
        
        
     <a
        href="https://github.com/ronnin47/proyectomotoresvistas.git"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          color: "black",
          padding: "0.5em 1em",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          marginTop: "1em"

        }}
        className='hovercito'
      >
  <img
    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
    alt="GitHub"
    style={{ width: "20px", height: "20px", marginRight: "8px" }}
  />
  GitHub
     </a>
      </div>
        
    </div>
  )
}

