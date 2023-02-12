import logoImage from "../assets/netflix_logo.png";
import avatarImage from "../assets/avatar.png";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Navbars() {
  return (
    <>
      <Navbar
        className="justify-content-between"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Nav>
          <Navbar.Brand>
            <img src={logoImage} alt="" style={{ height: "2rem" }} />
          </Navbar.Brand>
          <Nav.Link className="text-light" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            Tv shows
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            Recently Added
          </Nav.Link>
          <Nav.Link className="text-light" href="#">
            My List
          </Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand>
            <FontAwesomeIcon className="text-light" icon={faMagnifyingGlass} />
          </Navbar.Brand>
          <Nav.Link className="text-light" href="#">
            Kids
          </Nav.Link>
          <Navbar.Brand>
            <FontAwesomeIcon className="text-light" icon={faBell} />
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={avatarImage} alt="" style={{ height: "2rem" }} />
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </>
  );
}
