


export const App=()=> {
  //comentario
 //segundo comentario
 const saludo="Hola";


 const mostarEventoimagen=()=>{
  console.log("diste click en la imagen");
 }
  return (
    <>
    
     <h1>ESTO ES UNA ETIQUETA H1</h1>
     <img className="imagenGato" src="src\assets\gat.png" alt="imagen gato" onClick={mostarEventoimagen} />
     <input type="text" />
     <button>SOY BOTON</button>
    </>
  )
}


