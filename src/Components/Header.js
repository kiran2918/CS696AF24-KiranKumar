import React from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <FaBell className="notification-icon" />
      <NavDropdown title="Profile" id="basic-nav-dropdown" className="ml-3">
        <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default Header;
