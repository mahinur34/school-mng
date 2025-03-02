"use client"
import React, { useActionState} from 'react'
import "./login-form.scss";
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { TextInput } from '../common/footer/form-fields/text-input';
import { PasswordInput } from '../common/form-fields/password-input';
import { SubmitButton } from '../common/footer/form-fields/submit-button';

export const LoginForm = () => {

  const [state, formAction] = useActionState(loginAction, initialState);

   
  return (
    <Container className='login-form'>
        <Row className='justify-content-center'>
            <Col>
            <Card>
                <Card.Body>
                  <h4>Please enter your username and password</h4>
                <Form action="" >
                 <TextInput
                     label="Username"
                     name="username"
                     error={state?.errors?.username}
                     defaultValue={state.data.username ?? "root"}
                      />
                    <PasswordInput
                     label="Password"
                     name="password"
                     error={state?.errors?.password}
                     defaultValue={state.data.password ?? "12345aA."}
                    />
                    <SubmitButton title="Login" />

                </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}
