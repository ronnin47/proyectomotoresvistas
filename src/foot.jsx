import {Container, Row, Col} from 'react-bootstrap';
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className=" text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>ISFT-Prácticas Profesionalizantes</h5>
            <p>Profesor: Alejandro Rivas</p>
            <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>

          <Col md={4}>
            <h5>Desarrolladores</h5>
            <p className="dev-list">Brian Gonzalez | Sebastian Palavecino | Jorge Tournier</p>
            
          </Col>

          <Col md={4}>

            <h5>Redes Sociales</h5>
            
            <a href="https://github.com" className="text-light me-3 hoverIcon" target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            
            <a href="https://facebook.com" className="text-light me-3 hoverIcon" target="_blank" rel="noreferrer">
              <FaFacebook size={24} />
            </a>
            
            <a href="https://instagram.com" className="text-light hoverIcon" target="_blank" rel="noreferrer">
              <FaInstagram size={24} />
            </a>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
