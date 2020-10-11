// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
<Form className= "form-history">
        <div className="container">
        <div className="text-danger" align = "center"> <h2>Form History</h2></div>
        </div> 
        <br />

      <Row form>  
      <Col md={2}>
          <FormGroup>
          <Label for="Select">Title:</Label>
        
          <Input type="select" name="select" id="Select">
            <option>Mr.</option>
            <option>Mrs.</option>
          </Input>
          </FormGroup>
        </Col>
        
        <Col md={5}>
          <FormGroup>
            <Label for="firstname">Firstname:</Label>
            {/* <Input type="firstname" name="firstname" id="firstname" placeholder="" /> */}
            <Input />
        <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="lastname">Lastname:</Label>
            <Input type="lastname" name="lastname" id="lastname" placeholder="" />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
      <Col md={4}>
      <FormGroup>
        <Label for="Date">Date:</Label>
        <Input
          type="date"
          name="date"
          id="Date"
          placeholder="date placeholder"
        />
      </FormGroup>
      </Col>
      <Col md={8}>
          <FormGroup>
          <Label for="Select">Nationality:</Label>
        
          <Input type="select" name="select" id="Select">
            <option>--Please Select--</option>
            <option>Thailand</option>
            <option>England</option>
            <option>Japan</option>
            <option>Korea</option>
          </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Mobile Phone">Citizen Id:</Label>
            <Input type="Mobile Phone" name="Mobile Phone" id="Mobile Phone"/>
          </FormGroup>
        </Col>
        </Row>
      
      Gender: <br /> 
      <FormGroup check inline> 
            <Label check>
              <Input type="radio" name="male" />{' '} 
             male
            </Label> 
      </FormGroup >
      <FormGroup check inline>
            <Label check>
              <Input type="radio" name="female" />{' '}
             female
            </Label> 
      </FormGroup >
      <FormGroup check inline>
            <Label check>
              <Input type="radio" name="unisex" />{' '}
             unisex
            </Label> 
      </FormGroup >
      <br />  <br />
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Mobile Phone">Mobile Phone:</Label>
            <Input type="Mobile Phone" name="Mobile Phone" id="Mobile Phone"/>
          </FormGroup>
        </Col>
        </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Passport No">Passport No:</Label>
            <Input type="Passport No" name="Passport No" id="Passport No"/>
          </FormGroup>
        </Col>
        </Row>

      Expected Salary:
      <Form inline>
      <FormGroup>
        <Label for="Expected Salary" >   </Label>
        <Input type="Expected Salary" name="Expected Salary" id="Expected Salary" placeholder="" />
      </FormGroup>
      {' '}  
      THB
    </Form>
    <br />
    <Button>Submit</Button>
   </Form>
  );
}

export default App;





















// import React from "react";

// const greeting = "Hello World";
// const n = 20



// function App() {
//   return (
//   <>
//   <div>{n }</div>
//   <div className="greeting">{greeting}</div>
//   <input type ="text" autoFocus={true} />
//   </>
//   )
// }

// export default App;




// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
   
// //       <div className="container">
// //         <div className="text-danger" align = "center"> Hello CSS and Bootstrap</div>
// //       </div> 

      
          
         
     
//   )
// }
// export default App;


