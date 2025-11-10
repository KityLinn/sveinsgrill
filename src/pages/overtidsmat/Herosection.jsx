import { Container, Row, Col } from "react-bootstrap";
import { Phone } from "lucide-react";

export function Herosection() {
  return (
    <>
      <section className="hero-banner">
        <Container fluid className="h-100 align-items-center">
          <Row className="h-100 align-items-center">
            <Col xs={10} md={5} className="text-box p-5">
              <p className="text-white">Laget med omhu</p>
              <h1 className="display-4 fw-bold text-white">Overtidsmat</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
