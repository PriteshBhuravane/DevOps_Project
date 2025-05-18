import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card1 from '../components/Card1';

function Home() {
  return (
    <Container className="mt-5" >
        <div className=' text-center mb-4'>
        <h1>Welcome to the DevOps Mini Project</h1>
        <p>This project demonstrates a complete CI/CD pipeline for DevOps using React, Jenkins, and Docker.</p>
      </div>
      <Row>
        <Col md={3}><Card1 /></Col>
        <Col md={3}><Card1 /></Col>
        <Col md={3}><Card1 /></Col>
        <Col md={3}><Card1 /></Col>
      </Row>
    </Container>
    
  );
}

export default Home;