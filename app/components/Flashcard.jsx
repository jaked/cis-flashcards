import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import Play from './Play'

const Flashcard = function({ card }) {
  return (
    <Container>
      <Row className='d-flex flex-row'>
        <Col md={6}>
          <Card>
	    <div className='d-flex align-items-center justify-content-center'>
	      <Play url="/sounds/zung1.mp3" />
	    </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <div className='chinese d-flex align-items-center justify-content-center'>
	      {card[0]}
	    </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
  
module.exports = Flashcard;