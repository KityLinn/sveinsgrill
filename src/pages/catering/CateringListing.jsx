import { Container, Row, Col, Nav, Tab, ListGroup, Card } from 'react-bootstrap';
import { hovedretterdata, snitterdata, dessertdata, kakerdata } from '../../data/cateringdata';
import { category } from '../../data/cateringdata';




export function CateringListing() {
  return (
    <>
      {/*Title*/}
      <section>
        <Container className="py-5">
          {/*Side navigation container*/}
          <Tab.Container defaultActiveKey="HOVEDRETTER">
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
                <Tab.Content>
                  {" "}
                  {/*hovedretter data mapping*/}
                  {hovedretterdata.map((category) => (
                    <Tab.Pane eventKey={category?.navn} key={category?.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                              <Card.Body>
                                <Card.Title className="fw-bold text-primary d-flex justify-content-between">
                                  <span>{item?.navn}</span>
                                  <span>{item.pris?.toFixed(2)}kr</span>
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
                  {/*snitter data mapping*/}
                  {snitterdata.map((category) => (
                    <Tab.Pane eventKey={category?.navn} key={category?.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                              <Card.Body>
                                <Card.Title className="fw-bold text-primary d-flex justify-content-between">
                                  <span>{item?.navn}</span>
                                  <span>{item.pris?.toFixed(2)}kr</span>
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
                  {dessertdata.map((category) => (
                    <Tab.Pane eventKey={category?.navn} key={category?.navn}>
                      <Row className="g-4">
                        {category.items.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                              <Card.Body>
                                <Card.Title className="fw-bold text-primary d-flex justify-content-between">
                                  <span>{item?.navn}</span>
                                  <span>{item.pris?.toFixed(2)}kr</span>
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
                  <Tab.Pane eventKey={kakerdata?.navn} key={kakerdata?.navn}>
                    <Row className="g-4">
                      {kakerdata.items.map((item, index) => (
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
                                    {option?.porsjoner && (
                                      <span className="text-uppercase">
                                        til {option?.porsjoner} pers
                                      </span>
                                    )}
                                    {option?.tillegg && (
                                      <span className="text-uppercase">
                                        {option?.tillegg}
                                      </span>
                                    )}
                                    {option?.beskrivelse && (
                                      <span className="text-uppercase">
                                        {option?.beskrivelse}
                                      </span>
                                    )}
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
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
}