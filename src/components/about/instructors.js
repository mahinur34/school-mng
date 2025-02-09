import React from 'react'
import "./instructors.scss";
import instructors from "@/helpers/data/instructors.json";
import { InstructorCard } from './instructor-card';
import { Col, Container, Row } from 'react-bootstrap';

export const Instructors = () => {
  return (
    <Container className="instructors">
        <Row className="">
            <Col>
            <h2>Our most experienced instructors</h2>
            </Col>
            {instructors.map((item)=> (
             <Col key={item.id} lg={3} sm={6} md={4}>
             <InstructorCard {...item}/>
             </Col>
            ))}
           
        </Row>
    </Container>
  )
}
