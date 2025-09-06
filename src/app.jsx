

export const App=()=> {
  
//aca escribimos la logica de codigo


const saludo="hola estamso aca en React";

const MostrarEventoImagen=()=>{
  console.log("diste click en la imagen");
 }




  return (
    <>


  

     <img className="imagenAvatar" src="./src/assets/img.jpg" alt="imagen de puerto anime"  onClick={MostrarEventoImagen} />
     
 

    </>
  )
}






