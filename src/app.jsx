
import { Intro } from "./Intro";
import { Nave } from "./nav";
import { Footer } from "./footer";
import { Mapeo } from "./mapeo";
export const App = () => {
  

  const mostrareventoimagen = () => {
   
  };

  const nombrePagina="ISFT Motores vista";

return (
    <>
      <div className="layout">
        <Nave nombrePagina={nombrePagina}/>
        <div className="content">
          
          
          
          <Intro />
          <Mapeo />
        </div>
        <Footer />
      </div>
    </>
  );
};
