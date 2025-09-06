


export const App=()=> {
  const saludo="aca andamo programando de pana";
   const mostrareventoimagen=()=>{
    console.log("te has unido a los tralaleros");
  };
  return (
    <>
    
    <p     className="texto" >{saludo}</p>
    <h1>aca andamo de pana</h1>
    <img src="public/tralalero-tralala.jpg" alt="tralalero por siempre"/>

    <input type="text" />
    <button onClick={mostrareventoimagen}>tralalero</button>
    </>
  );
};


