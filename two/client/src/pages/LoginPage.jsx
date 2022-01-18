import React from 'react';
import { Link } from "react-router-dom";

import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    return (
        <Container fluid className="pb-5">
            <Card className="py-5 p-3 my-3 mx-auto my-5 w-50 sl-card">
                <Row className="p-2">
                    <Col>
                    <h2 className="text-center">Log In</h2>
                    </Col>
                </Row>
    
                <Row className="pt-2 px-2">
                    <Col className="mb-3 w-75">
                        <Form id="form" >
                            <Form.Group className="mb-4">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="email" placeholder="Type your e-mail address" />
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Type your password" />
                                <small>                                   
                                    <Link to="/" className="text-reset">forgot password?</Link>
                                </small>

                            </Form.Group>
                            <div className="submit-btn text-center">
                                <Button variant="primary" type="submit" className="btn btn-primary mb-1" id="submit">Submit</Button> <br/>
                                <small>
                                    <span>Don't have an account? | </span>
                                    <Link to="/signup" className="link">Sign Up</Link>
                                </small>
                            </div>
                        </Form>
                    </Col>
                </Row>
        </Card>
    </Container>
    )
}

export default LoginPage;