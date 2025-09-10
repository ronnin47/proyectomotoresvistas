import { Container, Nav , Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const Nave=({nombrePagina})=> {


  const expand="lg";
  
  return (
    <>
     
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
          <Container fluid>
            
            <div className='hoverIt'>
            <img src="/it.jpg"  style={{width:"32px", marginRight:"12px", borderRadius:"5px"}} alt="Logo IT" />
            <Navbar.Brand href="#" >{nombrePagina}</Navbar.Brand>
            </div>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
               bg="dark" data-bs-theme="dark"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <div className='hoverIt'>
                  <img src="/it.jpg"  style={{width:"32px", marginRight:"12px", borderRadius:"5px"}} alt="Logo IT" />
                  <Navbar.Brand href="#" >{nombrePagina}</Navbar.Brand>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/" className="nav-spacing" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/motores" className="nav-spacing">Motores</Nav.Link>
                    <Nav.Link as={Link} to="/crono" className="nav-spacing">Cronologia</Nav.Link>
                    <Nav.Link as={Link} to="/aplicaciones" className="nav-spacing">Aplicaciones</Nav.Link>
                    <Nav.Link as={Link} to="/conclusiones" className="nav-spacing">Conclusiones</Nav.Link>
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      
    </>
  );
}



/*import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Nave=({nombrePagina})=> {


 

  return (
    <Navbar  expand="lg"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <div className='hoverIt'>
        <img src="/it.jpg"  style={{width:"32px", marginRight:"12px", borderRadius:"5px"}} alt="Logo IT" />
        <Navbar.Brand href="#" >{nombrePagina}</Navbar.Brand>
        </div>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link as={Link} to="/" className="nav-spacing" >Home</Nav.Link>
           <Nav.Link as={Link} to="/motores" className="nav-spacing">Motores</Nav.Link>
           <Nav.Link as={Link} to="/crono" className="nav-spacing">Cronologia</Nav.Link>
           <Nav.Link as={Link} to="/aplicaciones" className="nav-spacing">Aplicaciones</Nav.Link>
           <Nav.Link as={Link} to="/conclusiones" className="nav-spacing">Conclusiones</Nav.Link>
           
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
*/

