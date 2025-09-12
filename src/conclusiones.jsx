import React from 'react'
import { Info } from './descargarInforme'


export const Conclusiones = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#222a] rounded-xl shadow-lg text-white">
      
      
      
      <div style={{display:"flex", flexWrap:"wrap",gap:"1em", alignItems:"center", justifyContent:"center", marginBottom:"2em", marginTop:"1em" }}>

      
        <img src="https://www.shutterstock.com/image-photo/panorama-shot-frontend-developer-team-260nw-2304027635.jpg" alt="" style={{border:"1px solid white", borderRadius:"10px",width:"70%"}} />
    
      

      <div>
           <h3 className="text-lg font-semibold mb-2">Impacto en el desarrollo de software</h3>
      <p className="mb-4">
Los motores de vistas han revolucionado la manera de construir aplicaciones, permitiendo interfaces más dinámicas, interactivas y fáciles de mantener. Gracias a ellos, es posible separar claramente la lógica de negocio de la presentación, lo que facilita la modularidad, la reutilización de componentes y la colaboración entre equipos. Esto no solo mejora la eficiencia en el desarrollo y mantenimiento, sino que también contribuye a crear aplicaciones más robustas, escalables y centradas en la experiencia del usuario, capaces de adaptarse a cambios y crecer con las necesidades del proyecto.
      </p>
      </div>

      </div>
      
      
     
    <div style={{backgroundColor:"#333a", padding:"1em", borderRadius:"10px" }} >
       <h3 className="text-lg font-semibold mb-2">Características de los principales motores de vistas</h3>
      <ul className="list-disc pl-6 mb-4">
        <li className="flex items-center mb-2">
          <i className="devicon-react-original colored" style={{fontSize: "2rem", marginRight: "0.5em"}}></i>
          <strong>React:</strong> Flexibilidad, rendimiento y un ecosistema amplio respaldado por una comunidad activa. Ideal para aplicaciones con requerimientos cambiantes y crecimiento progresivo.
        </li>
        <li className="flex items-center mb-2">
          <i className="devicon-angularjs-plain colored" style={{fontSize: "2rem", marginRight: "0.5em"}}></i>
          <strong>Angular:</strong> Robustez y estructura completa, adecuada para proyectos grandes y entornos corporativos que requieren escalabilidad y mantenimiento a largo plazo.
        </li>
        <li className="flex items-center mb-2">
          <i className="devicon-vuejs-plain colored" style={{fontSize: "2rem", marginRight: "0.5em"}}></i>
          <strong>Vue:</strong> Simplicidad y curva de aprendizaje baja, permite integraciones rápidas y desarrollo progresivo sin sacrificar funcionalidad.
        </li>
        <li className="flex items-center mb-2">
          <i className="devicon-dotnetcore-plain colored" style={{fontSize: "2rem", marginRight: "0.5em"}}></i>
          <i className="devicon-django-plain colored" style={{fontSize: "2rem", marginRight: "0.5em"}}></i>
          <strong>Razor / Python (Django/Jinja2):</strong> Integración eficiente en entornos donde C# o Python dominan el backend, facilitando la coherencia entre frontend y backend en aplicaciones empresariales.
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
      </div>

     
    </div>
  )
}

