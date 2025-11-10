import { Container, Row, Col, Button } from "react-bootstrap";
import { menyer } from "../../data/menyer.jsx";

export function Meny() {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2>MENYER</h2>
          <Row className="gx-md-5 gy-sm-5">
            {menyer.map((menyer, index) => (
              <Col key={index} xs={12} md={6}>
                <Row className="custom-card-styling rounded">
                  <Col
                    className="d-flex align-items-center justify-content-center col-3 bg-primary"
                    style={{ height: "130px" }}
                  >
                    {menyer.icon}
                  </Col>
                  <Col className="d-flex flex-column gap-2 ps-5 col-9 justify-content-center">
                    <div>
                      <span className="text-primary-emphasi">
                        {menyer.text}
                      </span>
                    </div>
                    <div>
                      <Button href={menyer.link}>{menyer.button}</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
