import React, { useCallback, useState } from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppStorageManager, { Application } from './AppStorageManager'

type CardProps = {
  apps: Application[],
  onDelete: (id: string) => void
}

const Cards = ({ apps, onDelete }: CardProps) => (
  <Accordion>
    {apps.map((app, i) => (
      <Card key={i}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={i.toString()}>
            <div>Email: {app.email}</div>
          </Accordion.Toggle>
          <Button onClick={() => onDelete(app.id)} variant='link'>Delete</Button>
          <Link to={`/application-manager/edit/${app.id}`}>Edit</Link>
        </Card.Header>
        <Accordion.Collapse eventKey={i.toString()}>
          <Card.Body>
            <div>Name: {app.name}</div>
            <div>Age:{app.age}</div>
            <div>Phone number: {app.phone}</div>
            <div>Way of communication: {app.wayOfCommunication}</div>
            <div>English level: {app.englishLevel}</div>
            <div>Available to start: {app.startDate.toLocaleDateString()}</div>
            <div>Tehnical skills: {app.skills}</div>
            <div>Short personal presentation: {app.personal}</div>
            <div>Study from home: {app.studyFromHome ? "Yes" : 'No'}</div></Card.Body>
        </Accordion.Collapse>
      </Card>))}
  </Accordion>
)

export default function ViewApps() {

  const [applications, setApplications] = useState(AppStorageManager.getAll())

  const handleOnDeleteClick = useCallback((id: string) => {
    AppStorageManager.deleteApp(id)
    setApplications(AppStorageManager.getAll())
  }, [setApplications])

  return (
    <Cards apps={applications} onDelete={handleOnDeleteClick} />
  )
}