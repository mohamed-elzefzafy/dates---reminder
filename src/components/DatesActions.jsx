import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesActions = ({onDelete , onviewData }) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="d-flex justify-content-between">
    <button className="btn-style p-2" onClick={ onDelete}>مسح الكل</button>
    <button className="btn-style p-2"  onClick={ onviewData}>عرض البيانات</button>
    <h1>hiiiiii</h1>
    </Col>
  
    </Row>
  )
}

export default DatesActions;