import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

