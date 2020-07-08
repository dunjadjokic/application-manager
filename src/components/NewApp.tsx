import React, { useReducer, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppEditFields from './AppEditFields'
import { reducer } from './EditApplicationState'
import { Form, Button, Row } from 'react-bootstrap'
import AppStorageManager from './AppStorageManager'

export default function NewApp() {

  const [app, dispatch] = useReducer(reducer, {
    id: uuidv4(),
    name: '',
    email: '',
    skills: '',
    age: 18,
    phone: '',
    englishLevel: 'A1',
    personal: '',
    studyFromHome: false,
    wayOfCommunication: 'email',
    startDate: new Date()
  })

  const handleSubmit = useCallback(() => {
    AppStorageManager.addApp(app)
  }, [app])

  return (
    <Form onSubmit={handleSubmit}>
      <AppEditFields app={app} dispatch={dispatch} />
      <Row className="justify-content-center">
        <Button variant="primary" type="submit">Submit application</Button>
      </Row>
    </Form>
  )
}