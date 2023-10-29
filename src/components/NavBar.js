import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Auth } from "aws-amplify";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import CreateHousingPage from '../pages/CreateHousingPage';
import ViewListingsPage from '../pages/ViewListingsPage';
import HomePage from '../pages/HomePage';

function NavBar() {

    const handleLogout = async () => {
        try {
          console.log("Logging out...");
          await Auth.signOut();
        } catch (err) { console.log(err); }
      }

  return (
    <Router>
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container fluid>
                <Navbar.Brand>
                    <Nav.Link as={Link} to={"/"}>SG House Lobang</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/create"}>Create Housing</Nav.Link>
                    <Nav.Link as={Link} to={"/view"}>View Listings</Nav.Link>
                </Nav>
                <div className="d-flex">
                    <Button variant="outline-success" onClick={handleLogout}>Logout</Button>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateHousingPage />} />
            <Route path="/view" element={<ViewListingsPage />} />
        </Routes>
    </Router>
  );
}

export default NavBar;