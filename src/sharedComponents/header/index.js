import React, { Component } from "react";
import { connect } from "react-redux";
import "./header.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar fluid fixdtop collapseOnSelect inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Travel</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>Home</NavItem>
            <NavItem>Link</NavItem>
            <NavDropdown eventKey={3} title="Forum" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}> Action </MenuItem>
              <MenuItem eventKey={3.2}> Another action </MenuItem>
              <MenuItem eventKey={3.3}> Something else here </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}> Separated link </MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{" "}
              <Button type="submit">Search</Button>
            </Navbar.Form>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
