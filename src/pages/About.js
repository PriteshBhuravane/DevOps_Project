import React from 'react';
import { Container, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <h1>About Us</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>Our Mission</Card.Title>
          <Card.Text>
            This project demonstrates a complete CI/CD pipeline for DevOps using React, Jenkins, and Docker.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;