import React, { useState, useEffect } from "react";
import Layout from "../../componentsAdmin/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../componentsAdmin/UI/Input";
import { login } from "../../actionsAdmin";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.authAdmin);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/admin_dash`} />;
  }

  let currentPath = props.location.pathname;
  return (
    <Layout showHeader={currentPath==="/signin"?false:true}>
      <Container>
        <Row style={{ marginTop: "150px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit"  style={{ backgroundColor: "#4CAF50", borderColor: "#007bff" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
