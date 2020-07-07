import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import AppStorageManager from './AppStorageManager'
import { v4 as uuidv4 } from 'uuid'

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
    //validation
    const newApp = {
      id: uuidv4(),
      name,
      email,
      age,
      phone,
      englishLevel,
      skills,
      personal,
      studyFromHome,
      wayOfCommunication,
      startDate
    }
    AppStorageManager.addApp(newApp)
  }


  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} controlId="formBasicName">
        <Form.Label column sm="2">Name </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicEmail">
        <Form.Label column sm="2">Email address </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
        <Form.Label column sm="2">Age </Form.Label>
        <Col sm="10">
          <Form.Control as="select" onChange={e => setAge(parseInt(e.target.value))}>
            <Options />
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicPhone">
        <Form.Label column sm="2">Phone number </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column sm="2">
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
      <Form.Group as={Row} controlId="formDate">
        <Form.Label as="legend" column sm="2">Available to Start:  </Form.Label>
        <Col sm="10">
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
        <Form.Label column sm="2">English level</Form.Label>
        <Col sm="10">
          <Form.Control as="select" onChange={e => setEnglishLevel(e.target.value)}>
            <option value='A1'>A1</option>
            <option value='A2'>A2</option>
            <option value='B1'>B1</option>
            <option value='B2'>B2</option>
            <option value='C1'>C1</option>
            <option value='C2'>C2</option>
          </Form.Control>
        </Col>
      </Form.Group>
 
      <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
        <Form.Label column sm="2">Technical skills and courses </Form.Label>
        <Col sm="10">
          <Form.Control as="textarea" rows={3} onChange={(e) => setSkills(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlTextarea2">
        <Form.Label column sm="2">Short personal presentation </Form.Label>
        <Col sm="10">
          <Form.Control as="textarea" rows={3} onChange={(e) => setPersonal(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Study from home" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudyFromHome(e.target.checked)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit application
    </Button>
    </Form>
  )
} 