"use client"
import React from 'react'
import "./login-form.scss";
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { TextInput } from '../common/footer/form-fields/text-input';

export const LoginForm = () => {

   
  return (
    <Container>
        <Row>
            <Col>
            <Card>
                <Card.Body>
                  <h4>Please enter your username and password</h4>
                <Form action="" >
                 <TextInput
                     label="username"
                     name="username"
                      />


                </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}
