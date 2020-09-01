import React from 'react';
import { Row } from 'react-bootstrap';

const rowStyles = { margin: '0px', padding: '60px 0px 15px 0px' };
export function SectionHeader({title}) {
  return (
    <Row style={rowStyles} className="justify-content-center">
      <h1 style={{textAlign: 'center'}} className="section_header">— {title} —</h1>
    </Row>
  )
}