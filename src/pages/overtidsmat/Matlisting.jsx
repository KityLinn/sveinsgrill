import { Container, Row, Col, Nav, Tab, ListGroup, Card } from 'react-bootstrap';
import { UtensilsCrossed } from 'lucide-react';
import { category, middagdata, hamburgerdata, pizzadata, diversedata}  from "../../data/overtidsmatdata.jsx"



export function Matlisting() {
  return (
    <>
      {/*Title*/}
      <section>
        <Container className="py-5">
          <div className="mb-5 text-center">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <UtensilsCrossed size={40} className="text-primary" />
              <h2 className="display-4 m-0">Vår meny</h2>
            </div>
          </div>
          {/*Side navigation container*/}
          <Tab.Container defaultActiveKey="MIDDAG">
            <Row className="g-3">
              <Col lg={2}>
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
              <Col lg={10}>
                {/*Middag data mapping*/}
                <Tab.Content>
                  {middagdata.map((category) => (
                    <Tab.Pane eventKey={category?.navn} key={category?.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                              <Card.Body>
                                <Card.Title className="fw-bold text-primary d-flex justify-content-between">
                                  <span>{item?.navn}</span>
                                  <span>
                                    {item.pris?.toFixed(2)}kr
                                  </span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <span className="fs-5">{item?.info}</span>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  ))}
                  {/*burger data mapping*/}
                  <Tab.Pane
                    eventKey={hamburgerdata?.navn}
                    key={hamburgerdata?.navn}
                  >
                    <Row className="g-4">
                      {hamburgerdata.items.map((item, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                          <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                              <Card.Title className="fw-bold text-primary text-center">
                                {item?.navn}
                              </Card.Title>
                              <ul className="list-unstyled mt-3">
                                {item.info.map((option, i) => (
                                  <li
                                    key={i}
                                    className="d-flex justify-content-between border-bottom py-1 fw-bold"
                                  >
                                    <span>{option?.gram}g</span>
                                    <span>{option?.pris} kr</span>
                                  </li>
                                ))}
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  {/*piza data mapping*/}
                  <Tab.Pane eventKey={pizzadata?.navn} key={pizzadata?.navn}>
                    <Row className="g-4">
                      {pizzadata.items.map((item, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4">
                          <Card className="h-100 shadow-sm border-0">
                            <Card.Body>
                              <Card.Title className="fw-bold text-primary text-center">
                                {item?.navn}
                              </Card.Title>
                              <ul className="list-unstyled mt-3">
                                {item.info.map((option, i) => (
                                  <li
                                    key={i}
                                    className="d-flex justify-content-between py-1 fw-bold text-uppercase"
                                  >
                                    <span>{option?.størrelse}</span>
                                    <span>{option?.pris} kr</span>
                                  </li>
                                ))}
                              </ul>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  {/*diverse data mapping*/}
                  {diversedata.map((category) => (
                    <Tab.Pane eventKey={category?.navn} key={category?.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                              <Card.Body>
                                <Card.Title className="fw-bold text-primary d-flex justify-content-between">
                                  <span>{item?.navn}</span>
                                  <span>{item?.pris.toFixed(2)}kr</span>
                                </Card.Title>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                  <span className="fs-5">{item?.info}</span>

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