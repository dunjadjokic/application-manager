import React, { useReducer, useCallback } from 'react'
import AppEditFields from './AppEditFields'
import AppStorageManager, { Application } from './AppStorageManager'
import { Form, Button } from 'react-bootstrap'
import { reducer } from './EditApplicationState'
import { Redirect, useHistory } from 'react-router-dom'


function EditApp1({ prevApp }: { prevApp: Application }) {
  const history = useHistory();
  const [app, dispatch] = useReducer(reducer, prevApp)

  const handleEditSubmit = useCallback(() => {
    AppStorageManager.updateApp(app)
    history.push('/view')
  }, [app, history])


  return (
    <Form onSubmit={handleEditSubmit}>
      <AppEditFields app={app} dispatch={dispatch} />
      <Button variant="primary" type="submit">Save changes</Button>
    </Form>
  )
}

type EditAppProps = { match: { params: { id: string } } }

export default function EditApp({ match }: EditAppProps) {
  const prevApp = AppStorageManager.getApp(match.params.id)
  if (!prevApp) {
    return (<Redirect push to='/not-found' />)
  }
  return (<EditApp1 prevApp={prevApp} />)
}