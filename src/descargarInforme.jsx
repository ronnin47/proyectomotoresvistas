import Button from 'react-bootstrap/Button';

import informe from '/informe.pdf'; 

export const Info = () => {

  const descargar=()=>{
   const link = document.createElement('a');
   link.href = informe;
   // Especificar el nombre del archivo para descargar
   link.download = 'informe.pdf';
   // Simular el clic en el enlace para iniciar la descarga
   link.click();
  }



  return (
    <>
          <div style={{marginTop:"1em"}}>
             <Button variant="outline-warning" onClick={descargar}>Descargar informe</Button>    
         </div>
    </>
  )
}


