import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({person , render}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" >
    <div className="rectangle p-2">

    {  person.length > 0 ? (
      person.map((onePerson) => {
      return (
        <div key={onePerson.id} className="d-flex border-bottom mx-3 my-2">
        <img className="img-avatar " src={onePerson.img} alt="sdsd"/>
        <div className="px-3">
          <p className="d-inline fs-5">{onePerson.name}</p>
          <p className="fs-6">{onePerson.date}</p> 
        </div>
      </div>


      )
    })
    ) : (<h2 className="p-5 text-center text-danger">لا يوجد مواعيد اليوم</h2>)}
  

    </div>
      </Col>
  
    </Row>
  )
}

export default DatesList