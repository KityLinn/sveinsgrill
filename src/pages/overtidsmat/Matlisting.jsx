import { Container, Row, Col, Nav, Tab, ListGroup, Card } from 'react-bootstrap';
import { UtensilsCrossed } from 'lucide-react';
import { middagdata }  from "../../data/overtidsmatdata.jsx"
import { hamburgerdata } from "../../data/overtidsmatdata.jsx"
import { pizzadata } from '../../data/overtidsmatdata.jsx';
import { category } from '../../data/overtidsmatdata.jsx';
import { diversedata } from '../../data/overtidsmatdata.jsx';

console.log(hamburgerdata.navn)

export function Matlisting() {
  return (
    <>
      {/*Title*/}
      <section>
        <Container className="py-5">
          <div className="mb-5 text-center">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <UtensilsCrossed size={40} className="text-primary" />
              <h1 className="display-4 m-0">Vår meny</h1>
            </div>
          </div>
          {/*Side navigation container*/}
          <Tab.Container defaultActiveKey="MIDDAG">
            <Row className="g-4">
              <Col lg={3}>
                <Nav variant="pills" className="flex-column gap-2">
                  {category.map((category) => (
                    <Nav.Item key={category}>
                      <Nav.Link eventKey={category} className="text-start">
                        {category}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col lg={9}>
                {/*Middag data mapping*/}
                <Tab.Content>
                  {middagdata.map((category) => (
                    <Tab.Pane eventKey={category.navn} key={category.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0 hover-card">
                              <Card.Body>
                                <Card.Title className="fw-bold text-dark">
                                  {item.navn}
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <span className="fs-5">{item.info}</span>
                                  <span className="text-primary fw-bold fs-5">
                                    {item.pris.toFixed(2)}kr
                                  </span>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                  {/*Middag data mapping*/}
                  <Tab.Pane eventKey={pizzadata.navn} key={pizzadata.navn}>
                    <Row className="g-4">
                      {pizzadata.items.map((item, index) => (
                        <Col md={4} key={index} className="mb-4">
                          <Card className="h-100 shadow-sm">
                            <Card.Body>
                              <Card.Title className="fw-bold text-center">
                                {item.navn}
                              </Card.Title>
                              <ul className="list-unstyled mt-3">
                                {item.info.map((option, i) => (
                                  <li
                                    key={i}
                                    className="d-flex justify-content-between border-bottom py-1"
                                  >
                                    <span>{option.størrelse}</span>
                                    <span>{option.pris} kr</span>
                                  </li>
                                ))}
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  {diversedata.map((category) => (
                    <Tab.Pane eventKey={category.navn} key={category.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0 hover-card">
                              <Card.Body>
                                <Card.Title className="fw-bold text-dark">
                                  {item.navn}
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <span className="fs-5">{item.info}</span>
                                  <span className="text-primary fw-bold fs-5">
                                    {item.pris.toFixed(2)}kr
                                  </span>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
}