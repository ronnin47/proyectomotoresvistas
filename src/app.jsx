

import { Intro } from "./intro";
import { Nave } from "./nav";
import { Footer } from "./footer";
import { Mapeo } from "./mapeo";


export const App = () => {
  
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
