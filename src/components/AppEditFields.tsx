import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Application } from './AppStorageManager';
import { EditAppAction } from './EditApplicationState';

function EnglishLevelOptions() {
  let arrayOptions: number[] = [];
  for (let age = 18; age <= 35; age++) {
    arrayOptions.push(age);
  }
  const options = arrayOptions.map(age => <option value={age} key={age}>{age}</option>)
  return (<>{options}</>)
}

const RequiredAsterisk = () => (
  <span className="required">*</span>
)

type EditProps = {
  app: Application,
  dispatch: React.Dispatch<EditAppAction>
}

export default function AppEditFields({ app, dispatch }: EditProps) {

  return (
    <>
      <Form.Group as={Row} controlId="formBasicName">
        <Form.Label column sm="2">Name <RequiredAsterisk /></Form.Label>
        <Col sm="10">
          <Form.Control
            pattern="([A-Z][a-zA-Z]+)(\s([A-Z][a-zA-Z]+))*"
            required
            type="text"
            value={app.name}
            placeholder="Example: Johnny Depp"
            onChange={(e) => dispatch({ type: 'setName', payload: { name: e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicEmail">
        <Form.Label column sm="2">Email address <RequiredAsterisk /></Form.Label>
        <Col sm="10">
          <Form.Control
            required
            type="email"
            value={app.email}
            placeholder="Example: johnny@gmail.com"
            onChange={(e) => dispatch({ type: 'setEmail', payload: { email: e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
        <Form.Label column sm="2">Age <RequiredAsterisk /></Form.Label>
        <Col sm="10">
          <Form.Control
            required
            as="select"
            value={app.age}
            onChange={e => dispatch({ type: 'setAge', payload: { age: parseInt(e.target.value) } })}>
            <EnglishLevelOptions />
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicPhone">
        <Form.Label column sm="2">Phone number <RequiredAsterisk /></Form.Label>
        <Col sm="10">
          <Form.Control
            pattern="[+][0-9]+"
            required
            type="text"
            value={app.phone}
            minLength={11}
            maxLength={20}
            placeholder="Example: +38160123456"
            onChange={(e) => dispatch({ type: 'setPhone', payload: { phone: e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label as="legend" column sm="2">
          Preferred way of communication <RequiredAsterisk />
      </Form.Label>
        <Col sm={10}>
          <Form.Check
            required
            inline
            type="radio"
            label="email"
            name="wayofcommunication"
            id="email"
            value="email"
            checked={app.wayOfCommunication === 'email'}
            onClick={() => dispatch({ type: 'setWayOfCommunication', payload: { wayOfCommunication: 'email' } })}
          />
          <Form.Check
            inline
            type="radio"
            label="phone"
            name="wayofcommunication"
            id="phone"
            value="phone"
            checked={app.wayOfCommunication === 'phone'}
            onClick={() => dispatch({ type: 'setWayOfCommunication', payload: { wayOfCommunication: 'phone' } })}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formDate">
        <Form.Label as="legend" column sm="2">Available to Start: <RequiredAsterisk /></Form.Label>
        <Col sm="10">
          <DatePicker
            required
            selected={app.startDate}
            onChange={(date: Date) => dispatch({ type: 'setStartDate', payload: { startDate: date } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlSelect2">
        <Form.Label column sm="2">English level</Form.Label>
        <Col sm="10">
          <Form.Control
            as="select"
            onChange={(e) => dispatch({ type: 'setEnglishLevel', payload: { englishLevel: e.target.value } })}>
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
          <Form.Control
            as="textarea"
            value={app.skills}
            rows={3}
            onChange={(e) => dispatch({ type: 'setSkills', payload: { skills: e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="exampleForm.ControlTextarea2">
        <Form.Label column sm="2">Short personal presentation </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textarea"
            value={app.personal}
            rows={3}
            onChange={(e) => dispatch({ type: 'setPersonal', payload: { personal: e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          checked={app.studyFromHome}
          label="Study from home"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'setStudyFromHome', payload: { studyFromHome: e.target.checked } })} />
      </Form.Group>
    </>)
}