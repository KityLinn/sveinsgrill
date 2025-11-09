import { Container, Row, Col } from "react-bootstrap";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5" id="footer">
      <Container>
        <Row className="align-items-center g-5 g-md-3">
          <Col xs={12} lg={6}  className="d-flex justify-content-center align-items-center gap-2 ms-auto flex-column">
            <a
              href=""
              className="text-white text-decoration-none link-light d-flex flex-row gap-1"
            >
              <Phone size={24} />
              <span>55 29 52 43</span>
            </a>
            <a
              href=""
              className="text-white text-decoration-none link-light d-flex flex-row gap-1"
            >
              <Mail size={24} />
              <span>sveinsgrill@gmail.com</span>
            </a>
            <a
              href=""
              className="text-white text-decoration-none link-light d-flex flex-row gap-1"
            >
              <MapPin size={24} />
              <span>Solheimsgaten 37,5054 Bergen</span>
            </a>
          </Col>
          <Col xs={12} lg={6} className="text-center">
            <p className="mb-0">Sveins Grill</p>
            <p className="mb-0">Org. nr.: 968 990 489</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
