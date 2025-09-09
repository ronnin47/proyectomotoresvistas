import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carta=({nombre,descripcion,imagenUrl,paginaOficial,paradigma})=>{






    return (
   <Card style={{ width: '12rem', margin: '10px', borderRadius: '10px',border:"2px solid gray", overflow: 'hidden' }}>
    <Card.Img 
        variant="top" 
        src={imagenUrl} 
        style={{ width: "100%", height: "200px", objectFit: "cover" }} 
    />
  <Card.Body style={{ height: "300px", backgroundColor: "black", color: "white" }}>
    <Card.Title style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
      {nombre}
    </Card.Title>
    <Card.Text style={{ minHeight: "80px" }}>
      {descripcion}
    </Card.Text>

    <Button 
      variant="outline-warning" 
      href={paginaOficial} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Página Oficial
    </Button>
  </Card.Body>
   </Card>
  );
}










export const LenguajesCards=()=>{

    

    const coleccionLenguajes=[
        {
            nombre:"JavaScript",
            descripcion:"Lenguaje de tipeo debil de alto nivel, multiparadigma, orientado a objetos, funcional y basado en prototipos.",
            imagenUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            paginaOficial:"https://developer.mozilla.org/es/docs/Web/JavaScript",
            paradigma:"Multiparadigma",
        },
        {
            nombre:"Python",
            descripcion:"Lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.",
            imagenUrl:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            paginaOficial:"https://www.python.org/",
            paradigma:"Multiparadigma",
        },
        {
            nombre:"Java",
            descripcion:"Lenguaje de programación de propósito general, concurrente, orientado a objetos y basado en clases.",
            imagenUrl:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            paginaOficial:"https://www.java.com/es/",
            paradigma:"Orientado a objetos",
        },
        {
            nombre:"C#",
            descripcion:"Lenguaje de programación multiparadigma desarrollado por Microsoft como parte de su plataforma .NET.",
            imagenUrl:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
            paginaOficial:"https://learn.microsoft.com/es-es/dotnet/csharp/",
            paradigma:"Multiparadigma",
        },
        {
            nombre:"CSS",
            descripcion:"Lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML o XML.",
            imagenUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            paginaOficial:"https://developer.mozilla.org/es/docs/Web/CSS",
            paradigma:"Declarativo",
        }
    ]



   


    return(
        <>
        <div style={{ display:"flex",flexWrap:"wrap",gap:"1em",justifyContent:"center",alignItems:"center",marginTop:"1em"   }}>
        
        {coleccionLenguajes.map( (lenguaje, index)=>(

           <Carta
                key={index}  
                nombre={lenguaje.nombre}  
                descripcion={lenguaje.descripcion}
                imagenUrl={lenguaje.imagenUrl}
                paginaOficial={lenguaje.paginaOficial}
                paradigma={lenguaje.paradigma}
           ></Carta>

        ) )}

        </div>
     


        </>
    )
}




