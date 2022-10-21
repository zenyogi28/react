import react, { Component } from 'react';
// import logo from '../logo.svg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";


class Page extends Component {
    menubar = () => {
        return (
            <>
              <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">
                <img
                  alt="logo"
                  src="https://52tutorials.com/wp-content/uploads/2020/04/cropped-android-chrome-192x192-1-2.png"
                  width="40"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                52Tutorials
            </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">home1</Nav.Link>
                    <Nav.Link href="#foo">foo1</Nav.Link>
                    <NavDropdown title="Dropdown">
                      <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="search" className="mr-sm-2" />
                    <Button variant="outline-primary">search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </>
          );
    }

    render() {

        return (this.menubar());
    }

}

export default Page;