import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { favoritterdata } from "../../data/favoritterdata.jsx"

export function Favoritter() {


  return (
    <>
     <section className="py-5">
      <Container>
        <h2>FAVORITTER</h2>
        <Row className="g-4">
          {favoritterdata.map((feature, index) => (
            <Col key={index} lg={4} sm={12}>
              <Card className="feature-card h-100 text-center shadow-sm flex-fill">
                <Card.Img variant="top" src={feature.img} alt={feature.title} />
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                  <Button variant="primary" href={feature.link}>
                    {feature.gåtil}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    </>
  );
}