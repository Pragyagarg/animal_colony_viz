import React, { Component } from 'react'
import './App.css'
import Routes from "./Routes";
import CreateForm from './CreateForm' 
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Animal Colony</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
//        <div>
//          <div>
//            <Header />
//          </div>
//          <div>
//            <CreateForm />  
//          </div>
//      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div className="App">
        <div className="App-header">
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
          </Jumbotron>
        </div>
    </div>
     
  );
};

export default App
