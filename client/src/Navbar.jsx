import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
function BasicExample() {
  return (
    <div className='Navbar'>
    <Navbar bg="light" expand="lg">
      <Container >
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown className="title" title="NSE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comp 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Comp 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comp 3</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Comp 4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Comp 5
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Feature</Nav.Link>
            <Nav.Link href="#link">Options</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;