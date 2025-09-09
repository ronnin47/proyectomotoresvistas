import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Mapeo = () => {

  const coleccion = [
    {
      nombre: "java",
      descripcion: "lenguaje de programacion",
      imagenurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      paginaoficial: "https://www.java.com/es/",
    }
    ,{
        nombre: "javascript",
        descripcion: "lenguaje de programacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {  nombre: "html",
        descripcion: "lenguaje de maquetacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {  nombre: "css",
        descripcion: "lenguaje de estilos",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
     {
      nombre: "java",
      descripcion: "lenguaje de programacion",
      imagenurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      paginaoficial: "https://www.java.com/es/",
    }
    ,{
        nombre: "javascript",
        descripcion: "lenguaje de programacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {  nombre: "html",
        descripcion: "lenguaje de maquetacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {  nombre: "css",
        descripcion: "lenguaje de estilos",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
     {
      nombre: "java",
      descripcion: "lenguaje de programacion",
      imagenurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      paginaoficial: "https://www.java.com/es/",
    }
    ,{
        nombre: "javascript",
        descripcion: "lenguaje de programacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {  nombre: "html",
        descripcion: "lenguaje de maquetacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {  nombre: "css",
        descripcion: "lenguaje de estilos",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
     {
      nombre: "java",
      descripcion: "lenguaje de programacion",
      imagenurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      paginaoficial: "https://www.java.com/es/",
    }
    ,{
        nombre: "javascript",
        descripcion: "lenguaje de programacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {  nombre: "html",
        descripcion: "lenguaje de maquetacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {  nombre: "css",
        descripcion: "lenguaje de estilos",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
     {
      nombre: "java",
      descripcion: "lenguaje de programacion",
      imagenurl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      paginaoficial: "https://www.java.com/es/",
    }
    ,{
        nombre: "javascript",
        descripcion: "lenguaje de programacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {  nombre: "html",
        descripcion: "lenguaje de maquetacion",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/HTML",
    },
    {  nombre: "css",
        descripcion: "lenguaje de estilos",
        imagenurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        paginaoficial: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
  ];

return (
  <>

      <div className="mapeoCards">

        {coleccion.map((lenguaje, index) => (
            <Carta key={index}
              nombre={lenguaje.nombre}
              descripcion={lenguaje.descripcion}
              imagenurl={lenguaje.imagenurl}
              paginaoficial={lenguaje.paginaoficial}>
              
            </Carta>
          ))}
          
      </div>
  
  
  
  </>
);
}

const Carta=({nombre, descripcion, imagenurl, paginaoficial})=> {
   


  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={imagenurl}  style={{
          width: '100%',
          height: '220px',      // Tamaño fijo para todas las imágenes
          objectFit: 'contain', // Mantiene la proporción y muestra todo el logo
          background: '#fff',
          padding: '12px'
        }}/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <a href={paginaoficial}></a>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


