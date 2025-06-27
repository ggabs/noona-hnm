import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = ({ setAuth }) => {
  const navi = useNavigate();
  const loginUser = (event, loginInfo) => {
    event.preventDefault();
    console.log("loginInfo  : ", loginInfo);
    setAuth(true);
    navi("/");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={(event) => loginUser(event, this)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
