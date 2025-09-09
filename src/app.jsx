

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//componentes nuestros que importamos
import { Nave } from './nav';
import { Footer } from './foot';
import { Intro } from './intro';
import { Motores } from './motores'; 
import { Crono } from "./crono"; 
import { Aplicaciones } from "./aplicaciones";
import { Conclusiones } from "./conclusiones";






export const App=()=> {
  
  //Props
  const nombrePagina="ISFT-Motores Vistas";


  return (
    <>
    <Router>
        <div className='layout'>

          <Nave nombrePagina={nombrePagina}/>

          <div className='content'>


            <Routes>
              <Route path="/" element={<Intro/>} />
              <Route path="/home" element={<Intro/>} />
              <Route path="/motores" element={<Motores/>} />
              <Route path="/crono" element={<Crono/>} />
              <Route path="/aplicaciones" element={<Aplicaciones/>} />
              <Route path="/conclusiones" element={<Conclusiones/>} />
            </Routes>

        
          </div>
          
          <Footer/>

        </div>
    </Router> 
    </>
  )
}






