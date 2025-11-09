import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Clock, PartyPopper } from "lucide-react";

export function Meny() {
  return (
    <>
      <section className="features-section py-5">
        <Container>
          <h2>MENYER</h2>
          <Row className="g-5">
            <Col xs={12} md={6}>
              <div className="border-primary border border-3 row rounded">
                <div
                  className="col-3 d-flex align-items-center justify-content-center bg-primary"
                  style={{ height: "130px" }}
                >
                  <Clock size={70} color="white" />
                </div>
                <div className="col-9 justify-content-center d-flex flex-column gap-2 ps-5">
                  <div>
                    <span className="text-primary-emphasis">
                      Laget med omhu
                    </span>
                  </div>
                  <div>
                    <Button>OVERTIDSMAT</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className=" border-primary border border-3 rounded align-items-center row">
                <div
                  className="col-3 d-flex align-items-center justify-content-center bg-primary"
                  style={{ height: "130px" }}
                >
                  <PartyPopper size={70} color="white" />
                </div>
                <div className="col-9 justify-content-center d-flex flex-column gap-2 ps-5">
                  <div>
                    <span className="text-primary-emphasis">
                      Mat til selskapet
                    </span>
                  </div>
                  <div>
                    <Button>CATERING</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
