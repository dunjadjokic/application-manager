import React, { useCallback, useReducer } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Redirect, useHistory } from 'react-router-dom'
import AppEditFields from './AppEditFields'
import AppStorageManager, { Application } from './AppStorageManager'
import { reducer } from './EditApplicationState'


function EditApp1({ prevApp }: { prevApp: Application }) {
  const history = useHistory();
  const [app, dispatch] = useReducer(reducer, prevApp)

  const handleEditSubmit = useCallback(() => {
    AppStorageManager.updateApp(app)
    history.push('/application-manager/view')
  }, [app, history])


  return (
    <Form onSubmit={handleEditSubmit}>
      <AppEditFields app={app} dispatch={dispatch} />
      <Row className="justify-content-center">
        <Col md="auto" xs={6}>
          <Button variant="primary" type="submit">Save changes</Button>
        </Col>
        <Col md="auto" xs={6}>
          <Button variant="primary" type="submit" onClick={() => history.push("/application-manager/view")}>Cancel</Button>
        </Col>
      </Row>
    </Form>
  )
}

type EditAppProps = { match: { params: { id: string } } }

export default function EditApp({ match }: EditAppProps) {
  const prevApp = AppStorageManager.getApp(match.params.id)
  if (!prevApp) {
    return (<Redirect push to='/application-manager/not-found' />)
  }
  return (<EditApp1 prevApp={prevApp} />)
}