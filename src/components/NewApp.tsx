import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

function Options() {
  let arrayOptions: number[] = [];
  for (let age = 18; age <= 35; age++) {
    arrayOptions.push(age);
  }
  const options = arrayOptions.map(age => <option value={age} key={age}>{age}</option>)
  return (<>{options}</>)
}

export default function NewApp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(18)
  const [phone, setPhone] = useState('')
  const [englishLevel, setEnglishLevel] = useState('')
  const [skills, setSkills] = useState('')
  const [personal, setPersonal] = useState('')
  const [studyFromHome, setStudyFromHome] = useState(false)
  const [wayOfCommunication, setWayOfCommunication] = useState('email')
  const [startDate, setStartDate] = useState(new Date())


  function handleOnSubmit() {
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Age </Form.Label>
        <Form.Control as="select" onChange={e => setAge(parseInt(e.target.value))}>
          <Options />
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone number </Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)} />
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
            value="email"
            defaultChecked
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWayOfCommunication(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="phone"
            name="wayofcommunication"
            id="phone"
            value="phone"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWayOfCommunication(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label as="legend" column>Available to Start:  </Form.Label>
        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>English level</Form.Label>
        <Form.Control as="select" onChange={e => setEnglishLevel(e.target.value)}>
          <option value='A1'>A1</option>
          <option value='A2'>A2</option>
          <option value='B1'>B1</option>
          <option value='B2'>B2</option>
          <option value='C1'>C1</option>
          <option value='C2'>C2</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Technical skills and courses </Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setSkills(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea2">
        <Form.Label>Short personal presentation </Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setPersonal(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Study from home" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudyFromHome(e.target.checked)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit application
    </Button>
    </Form>
  )
} 