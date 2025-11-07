import { Container, Row, Col, Card, Button } from "react-bootstrap";
import burger from "../assets/hamburger-2.png"
import pizza from "../assets/pizza.jpeg"
import middag from "../assets/kjottkaker-brun-saus.jpeg"

export default function Favoritter() {
    const features = [
    {
      img: burger,
      title: "Hamburger",
      text: "Ingenting slår en god og saftig hamburger",
      link: "#",
      gåtil: "gå til burgere"
    },
    {
      img: pizza,
      title: "Pizza",
      text: "Passer om det er overtidsmat eller man bare har lyst på noe godt",
      link: "#",
      gåtil: "gå til pizza"
    },
    {
      img: middag,
      title: "Feature Three",
      text: "Tradisjonell og god husmannskost",
      link: "#",
      gåtil: "gå til middager"
    }
  ];

  return (
    <>
     <section className="features-section py-5">
      <Container>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} md={4} sm={12}>
              <Card className="feature-card h-100 text-center shadow-sm flex-fill">
                <Card.Img variant="top" src={feature.img} alt={feature.title} />
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
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