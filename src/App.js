import { Button, Col, Form, Modal, Nav, NavDropdown, Row } from "react-bootstrap";
import "./App.css";

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <>
          <Nav.Link eventKey="1" href="#">
            Home
          </Nav.Link>
        </>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            NavLink 3 content
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <br />
      <br />

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>

      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

    <footer><p>Copyright 2023</p></footer>
    </div>
  );
}

export default NavDropdownExample;
