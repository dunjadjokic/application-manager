import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

function Options() {
  let arrayOptions: number[] = [];
  for (let age = 18; age <= 35; age++) {
    arrayOptions.push(age);
  }
  const options = arrayOptions.map(age => <option value={age}>{age}</option>)
  return (<>{options}</>)
}

// function Date() {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
//   );
// }

export default function NewApp() {

  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name <label className="required">*</label> </Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address <label className="required">*</label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Age <label className="required">*</label></Form.Label>
        <Form.Control as="select">
          <Options />
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone number<label className="required">*</label></Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column>
          Preferred way of communication
      </Form.Label>
        <Col sm={10}>
          <Form.Check
            inline
            type="radio"
            label="email"
            name="wayofcommunication"
            id="email"
            defaultChecked
          />
          <Form.Check
            inline
            type="radio"
            label="phone"
            name="wayofcommunication"
            id="phone"
          />
        </Col>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>English level</Form.Label>
        <Form.Control as="select">
          <option value='A1'>A1</option>
          <option value='A2'>A2</option>
          <option value='B1'>B1</option>
          <option value='B2'>B2</option>
          <option value='C1'>C1</option>
          <option value='C2'>C2</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Technical Skills and Courses </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea2">
        <Form.Label>Short Personal Presentation </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Study from home" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit application
    </Button>
    </Form>
  )
} 