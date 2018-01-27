import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap';

const Card = function({ card }) {
  return (
    <Grid>
      <Row>
        <Col md={6}>
          <Panel bsStyle="primary">
            <Panel.Body>
              <div className='chinese'>{card[0]}</div>
            </Panel.Body>
          </Panel>
        </Col>
        <Col md={6}>
          <Panel bsStyle="primary">
            <Panel.Body>
              <div className='english'>{card[1]}</div>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </Grid>
	);
}
  
module.exports = Card;