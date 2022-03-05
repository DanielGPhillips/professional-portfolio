import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../App.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { render } from '@testing-library/react';

const schema = Yup.object().shape({
  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
  lastName: Yup.string().max(20, 'Must be 20 characters or less').required(),
  email: Yup.string().email('Invalid email address').required(),
  message: Yup.string().required(),
});

function Contact() {
  return (
      <Container className='text-center'>
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        }}
        >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            
            <Form noValidate onSubmit={handleSubmit}>  
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label className="text-white">First name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label className="text-white">Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group  controlId="validationFormikEmail">
                <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control
                    type="text"                  
                    placeholder="username@example.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                    {errors.email}
                    </Form.Control.Feedback>
                
                </Form.Group>
            </Row>
            <Row className="mb-3">
                    <Form.Group  controlId="validationFormikMessage">
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control
                        type="text"
                        as= "textarea"
                        rows={10}
                        placeholder="Enter your message here."
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={touched.message && !errors.message}
                    />
                    <Form.Control.Feedback>Thanks for the message!</Form.Control.Feedback>
                    </Form.Group>
            </Row>            
            <Button type="submit">Send Message</Button>
            </Form>
        )}
        </Formik>
      </Container>
  );
}

export default Contact;