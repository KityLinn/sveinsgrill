import { Link, useNavigate } from "react-router-dom";
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
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="Sveins Grill" />
            </Navbar.Brand>
          </Link>
          <Nav className="gap-4">
            <Link to="/overtidsmat" className="text-white link-hover nav-link">
              OVERTIDSMAT
            </Link>
            <Link to="/catering" className="text-white link-hover nav-link">
              CATERING
            </Link>
            <Link to="/grill" className="text-white link-hover nav-link">
              GRILL
            </Link>
            <Link to="/kontakt" className="text-white link-hover nav-link">
              KONTAKT OSS
            </Link>
          </Nav>
          <Nav.Link href="#link" className="text-white">
            Last ned julemeny
          </Nav.Link>
        </div>
      </Navbar>
      <Navbar className="d-flex d-lg-none bg-primary">
        <Container className="justify-content-between">
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="Sveins Grill" />
            </Navbar.Brand>
          </Link>
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
            <Link to="/overtidsmat" className="text-white link-hover nav-link">
              OVERTIDSMAT
            </Link>
            <Link to="/catering" className="text-white link-hover nav-link">
              CATERING
            </Link>
            <Link to="/grill" className="text-white link-hover nav-link">
              GRILL
            </Link>
            <Link to="/kontakt" className="text-white link-hover nav-link">
              KONTAKT OSS
            </Link>
            <Nav.Link href="#link" className="text-white">
              Last ned julemeny
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
