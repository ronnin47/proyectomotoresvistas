

export const Intro=()=>{

const informeMotoresVistas = `
1. Introducción
El desarrollo web moderno se caracteriza por la necesidad de construir aplicaciones cada vez más dinámicas, rápidas y fáciles de usar. En sus orígenes, la web estaba formada por páginas estáticas escritas únicamente en HTML, pero hoy los usuarios esperan interfaces interactivas que respondan en tiempo real a sus acciones.
En este contexto surgen los motores de vistas, también conocidos como frameworks o bibliotecas de frontend, que permiten gestionar cómo se construyen y actualizan las interfaces gráficas. Herramientas como React, Angular y Vue.js se han convertido en pilares fundamentales de la industria, ya que simplifican el trabajo de los desarrolladores y garantizan experiencias de usuario más fluidas.
Este informe busca explicar qué son los motores de vistas, cómo funcionan y analizar los más utilizados en la actualidad: React, Angular, Vue, Razor (C#) y los motores en Python.

2. ¿Qué es un motor de vistas?
Un motor de vistas es la tecnología que se encarga de transformar datos en representaciones visuales dinámicas, es decir, convierte la información gestionada por el backend en elementos que el usuario puede ver e interactuar en el frontend.

Backend: gestiona la lógica de negocio y las bases de datos.
Frontend: muestra esa información en una interfaz amigable.
Motor de vistas: conecta ambos mundos, renderizando la información y actualizándola automáticamente cuando cambian los datos.

Características comunes de un motor de vistas:
- Plantillas dinámicas: HTML enriquecido con variables.
- Renderizado eficiente: se actualizan solo las partes necesarias, no toda la página.
- Componentización: la UI se divide en bloques reutilizables.
- Interactividad: responde a eventos del usuario como clics o formularios.
`;


return(
<>
    <div className="introduccion">

        <img style={{width:"600px",borderRadius:"10px"}} src="https://coreui.io/images/blog/react-bootstrap-cover_hu_81769b384d865f9e.webp" alt="" />
    
        <p className="intro">
        {informeMotoresVistas}
        </p>
    </div>

</>




)

}