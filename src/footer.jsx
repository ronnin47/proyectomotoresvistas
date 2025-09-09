import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Mi Proyecto</h5>
            <p>Un texto corto de descripción o slogan.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="#about" className="text-light text-decoration-none">Sobre nosotros</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Redes</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Redes</h5>
            <p>Email: contacto@ejemplo.com</p>
            <p>Email: contacto@ejemplo.com</p>
          </Col>
        </Row>
        <hr className="border-top border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};