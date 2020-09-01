import React from 'react';
import { Row } from 'react-bootstrap';

const rowStyles = { margin: '0px', padding: '0px 10px' };
export function SectionSubtitle({subtitle}) {
  return (
    <Row style={rowStyles} className="justify-content-center">
      <h5 style={{textAlign: 'center'}} className="section_subtitle">{subtitle}</h5>
    </Row>
  )
}