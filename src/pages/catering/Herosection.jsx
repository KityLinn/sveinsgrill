import { Container, Row, Col } from "react-bootstrap";


export function Herosection() {
  return (
    <>
      <section className="catering-banner">
        <Container fluid className="h-100 align-items-center">
          <Row className="h-100 align-items-center">
            <Col xs={10} md={5} className="text-box p-5">
              <p className="text-white">Mat til selskapet</p>
              <h1 className="display-4 fw-bold text-white">Catering</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
