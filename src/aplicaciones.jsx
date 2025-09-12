import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const motores = [
  {
    nombre: "React",
    icono: <i className="devicon-react-original colored" style={{fontSize:"5.2rem",}}></i>,
    apps: [
      { nombre: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
      { nombre: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
      { nombre: "WhatsApp Web", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
      { nombre: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
      { nombre: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
      { nombre: "Dropbox", logo: "data:image/png;base64,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" },
      {nombre: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
      { nombre: "Discord", logo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDaK1XdUso6cUMpI9hAdPUU_FNs11cY1X284vsHrnWtRw7oqRpN1m9YAg21d_aNKnIo-&format=source" },
      { nombre: "Xbox (interfaz)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png" },
    ],
    resumen: "React impulsa apps masivas y plataformas de streaming."
  },
  {
    nombre: "Angular",
    icono: <i className="devicon-angularjs-plain colored" style={{fontSize:"5.2rem",}}></i>,
    apps: [
      { nombre: "Google Cloud Console", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7zFdXsKDv1EVHLvyOEt7RrPQ7kxYXCI7kg&s" },
      { nombre: "Microsoft Office Online", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
      { nombre: "Deutsche Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/1024px-Deutsche_Bank_logo_without_wordmark.svg.png" },
      { nombre: "Forbes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/2560px-Forbes_logo.svg.png" },
      { nombre: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" },
    ],
    resumen: "Angular domina en banca, gobierno y grandes corporaciones."
  },
  {
    nombre: "Vue.js",
    icono: <i className="devicon-vuejs-plain colored" style={{fontSize:"5.2rem",}}></i>,
    apps: [
      { nombre: "Alibaba", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmS2g5OohnFLndn_s0C0ZJ8vAT39xH6eAbOw&s" },
      { nombre: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg" },
      { nombre: "Nintendo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" },
      { nombre: "GitLab", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13L-lOWEDftXumYLiHGASvLqCJ6xr78_c-A&s" },
      { nombre: "Behance (Adobe)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAnclPLEQ9CShH1U1Qz6d-7Av0MJPfm3Eyzw&s" },
    ],
    resumen: "Vue.js es popular en startups y productos de iteración rápida."
  },
  {
    nombre: "Razor (C# / ASP.NET)",
    icono: <i className="devicon-dotnetcore-plain colored" style={{fontSize:"5.2rem",}}></i>,
    apps: [
      { nombre: "Stack Overflow", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" },
      { nombre: "Microsoft Docs", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
      { nombre: "GoDaddy", logo: "https://sm.pcmag.com/pcmag_me/review/g/godaddy-we/godaddy-web-hosting_2a47.jpg" },
      { nombre: "DHL", logo: "https://i.ytimg.com/vi/2z2yDFF8Mhg/maxresdefault.jpg" },
      { nombre: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },  
    ],
    resumen: "Razor se usa en entornos corporativos Microsoft y sitios institucionales."
  },
  {
    nombre: "Python (Django/Jinja2)",
    icono: <i className="devicon-django-plain colored" style={{fontSize:"5.2rem"}}></i>,
    apps: [
      { nombre: "Instagram (origen)", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
      { nombre: "Pinterest", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
      { nombre: "Disqus", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIKZnH8edBW2csz0Cr9vzIzGrfK9wTRDuwQ&s" },
      { nombre: "Mozilla", logo: "https://images.sftcdn.net/images/t_app-icon-m/p/6238877e-9b36-11e6-a20c-00163ed833e7/284483160/mozilla-firefox-es-ar-logo.png" },
      { nombre: "The Washington Post", logo: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost%252Es3%252Eamazonaws%252Ecom%2Fpublic%2FBA3LQ27PFVG5RCTQ7P2D2SMBJU%252Ejpg&w=1584&h=1190" },
    ],
    resumen: "Python destaca en medios digitales, investigación y comunidades."
  },
];

export const Aplicaciones = () => {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "2em auto",
      padding: "2em",
      background: "#222a",
      borderRadius: "18px",
      boxShadow: "0 2px 16px #0008",
      color: "aliceblue"
    }}>



<h1 style={{ fontSize: "2.5rem", fontFamily:"-moz-initial",textAlign:"center", color: "aliceblue",textShadow: "0 0 10px aquamarine" }}>
      <Typewriter
        words={['Aplicaciones famosas según el motor de vistas']}
        loop={true}
        cursor
        cursorStyle=' | '
        typeSpeed={170}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </h1>


      <div>
        {motores.map((motor, idx) => (
          <div key={idx} className="aplicacion-motor" style={{
            display: "flex",
            alignItems: "center",
            background: "#1a1a2e",
            borderRadius: "12px",
            padding: "1em",
            boxShadow: "0 1px 8px #0005",
            marginBottom: "1.7em",
            transition: "transform 0.2s",
          }}>
             <div style={{
              flexShrink: 0,
              marginRight: "2em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "120px",
              height: "100%",
              textAlign: "center"
            }}>
              {motor.icono}
              <div style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                color: "aquamarine",
                textShadow: "0 0 8px aquamarine",
                marginTop: "0.5em",
                textAlign: "center",
                width: "100%"
              }}>
                {motor.nombre}
              </div>
            </div>
            <div style={{flex: 1}}>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.2em",
                margin: "1em 0"
              }}>
                {motor.apps.map((app, i) => (
                  <div key={i} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "100px",
                    maxWidth: "120px"
                  }}>
                    <img
                        src={app.logo}
                        alt={app.nombre + " logo"}
                        className="app-logo"
                        style={{
                          width: "54px",
                          height: "54px",
                          marginBottom: "0.5em",
                          borderRadius: "12px",
                          background: "#fff",
                          boxShadow: "0 0 8px #0005"
                        }}
                      />
                    <span style={{
                      fontSize: "1em",
                      color: "#fff",
                      textAlign: "center",
                      textShadow: "0 0 4px #222"
                    }}>{app.nombre}</span>
                  </div>
                ))}
              </div>
              <div style={{
                fontStyle: "italic",
                color: "#baffea",
                fontSize: "1em",
                marginTop: "0.3em"
              }}>
                {motor.resumen}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


