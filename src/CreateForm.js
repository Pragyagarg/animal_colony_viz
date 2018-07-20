import React, { Component } from 'react'
import './App.css'
import WelcomePage from './WelcomePage' 

import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'  
import { Jumbotron, Container } from 'reactstrap';


class CreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        login: false,
        logout: true
      };
      this.updateState = this.updateState.bind(this);
//    this.createBarChart = this.createBarChart.bind(this)             
  };
  
  
  updateState(e) {
//    window.location = 'app01/src/WelcomePage.js';
     this.setState({login: true})

  }
  
  render() {
//    return (
//         <div>
//            <br />
//            <br />
//            <br />
      
      if (this.state.logout)
      { return (
         <div>
            <br />
            <br />
            <br />
            <Component1 myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Component1> 
        </div>
        );
      }
      if (this.state.login) 
      { return (
         <div>
            <br />
            <br />
            <br />
            <Component2 myDataProp = {this.state.data} 
               updateStateProp = {this.updateState}></Component2> 
        </div>
        );
      } 
         
    
  }

//  componentDidMount() {                                              
//    this.createForm()
//  }
//
//  componentDidUpdate() {                                             
//    this.createForm()
//  }

  
}

class Component1 extends Component {
  
  render() {  
      return (
        <div>
        <form>

          <FormGroup controlId="form-group">
            <ControlLabel for="exampleInputEmail1">Email address</ControlLabel>
            <FormControl type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </FormGroup>

          <FormGroup controlId="form-group">
            <ControlLabel for="exampleInputPassword1">Password</ControlLabel>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </FormGroup>

          <FormGroup class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <ControlLabel class="form-check-label" for="exampleCheck1">Check me out</ControlLabel>
          </FormGroup>

          <button type="submit" class="btn btn-primary" onClick = {this.props.updateStateProp}>Login</button>      

        </form>
        <h3>{this.props.myDataProp}</h3>
        </div>
      );
    }
}

class Component2 extends React.Component {
   render() {
      return (
         <div>
            Welcome!
         </div>
      );
   }
}
    
    
//    const node = this.node                                           
//    const dataMax = max(this.props.data)                             
//    const yScale = scaleLinear()
//      .domain([0, dataMax])
//      .range([0, this.props.size[1]])                                
//
//    select(node)
//      .selectAll("rect")
//      .data(this.props.data)
//      .enter()
//      .append("rect")
//
//    select(node)
//      .selectAll("rect")
//      .data(this.props.data)
//      .exit()
//      .remove()
//
//    select(node)
//      .selectAll("rect")
//      .data(this.props.data)
//      .style("fill", "#fe9922")
//      .attr("x", (d,i) => i * 25)
//      .attr("y", d => this.props.size[1] - yScale(d))
//      .attr("height", d => yScale(d))
//      .attr("width", 25)
  

//  render(<CreateForm />); 
export default CreateForm