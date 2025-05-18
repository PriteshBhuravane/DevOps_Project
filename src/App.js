import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h1>DevOps Mini Project</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>CI/CD Pipeline Demo</Card.Title>
          <Card.Text>
            This is a simple React + Bootstrap application for demonstrating a CI/CD pipeline using GitHub, Jenkins, and Docker.
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;