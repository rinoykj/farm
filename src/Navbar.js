import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import logo from "./Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="Logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="Navbar" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Nav-menu" href="#Home">
              Home
            </Nav.Link>
            <Nav.Link className="Nav-menu" href="#About Us">
              About Us{" "}
            </Nav.Link>
            <Nav.Link className="Nav-menu" href="#Services">
              Services{" "}
            </Nav.Link>
            <Nav.Link className="Nav-menu" href="#Pages">
              Pages{" "}
            </Nav.Link>
            <Nav.Link className="Nav-menu " href="#Blog">
              Blog{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="Nav-menu" href="#deets">
              More deets
            </Nav.Link>
            <Nav.Link className="Nav-menu"> +91 99615 21656 </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
