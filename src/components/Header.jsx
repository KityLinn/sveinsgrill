import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_v4.png";

export function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="d-none d-lg-flex bg-primary">
        <div className=" d-flex flex-row justify-content-between w-100 px-4 align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className=" gap-4">
            <Nav.Link href="#home" className="text-white link-hover">
              OVERTIDSMAT
            </Nav.Link>
            <Nav.Link href="#link" className="text-white link-hover">
              CATERING
            </Nav.Link>
            <Nav.Link href="#link" className="text-white link-hover">
              GRILL
            </Nav.Link>
            <Nav.Link href="#link" className="text-white link-hover">
              KONTAKT OSS
            </Nav.Link>
          </Nav>
          <Nav.Link href="#link" className="text-white">
            Last ned julemeny
          </Nav.Link>
        </div>
      </Navbar>

      <Navbar className="d-flex d-lg-none bg-primary">
        <Container className="justify-content-end">
          <Button variant="light" onClick={handleShow} aria-label="open menu">
            <Menu size={24} />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        restoreFocus={false}
      >
        <Offcanvas.Header className="bg-primary">
          <Button variant="light" onClick={handleClose} aria-label="close menu">
            <X size={24} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" className="text-white">
              OVERTIDSMAT
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              CATERING
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              GRILL
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              KONTAKT OSS
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Last ned julemeny
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
