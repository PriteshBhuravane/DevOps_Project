import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Home() {
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

export default Home;