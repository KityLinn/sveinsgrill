import { Container, Row, Col } from "react-bootstrap";
import { Phone } from 'lucide-react';

export default function Herosection() {

  return (
    <>
    <section className="hero-banner">
      <Container fluid className="h-100 align-items-center">
        <Row className="h-100 align-items-center">
          <Col md={6} className="text-box p-5">
            <h1 className="display-4 fw-bold text-white">Sveins grill</h1>
            <p className="text-white">
             Byens beste overtidsmat
            </p>
            <div className="d-flex flex-row gap-4">
              <Phone size={24} />
              <span className=" text-white">55 29 52 43</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  );
}