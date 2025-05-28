import React, { useState, useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.jpg';
import '../style/userProfile.scss';
import { UserContext } from '../Context/UserContext';
import Base_Url from '../config/Base_url';

function Signup() {
  const { setUser } = useContext(UserContext);
  const navigateUrl = useNavigate()
  const [Register, setRegister] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };


  const handleSignup = async () => {
    try {
      const response = await fetch(`${Base_Url}/register-account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Register)
      });

      if (!response.ok) {
        console.error("Error during registration.");
        return;
      }

      const result = await response.json();


      setUser(result.user || null);

      navigateUrl('/login')
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
    <Container className="login-container py-5">
      <Row className="form-section align-items-center shadow-lg rounded-4 overflow-hidden">
        {/* Left: Form */}
        <Col lg={6} className="form p-5 bg-white">
          <h2 className="title-login mb-4 text-primary fw-bold">Create New Account</h2>

          <Form>
            <Row className="mb-4">
              <Col className="d-flex gap-3 flex-wrap">
                <Form.Group className="flex-fill">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control name='userName' onChange={handleChange} type="text" placeholder="Enter User Name" />
                </Form.Group>
                <Form.Group className="flex-fill">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name='userEmail' onChange={handleChange} type="email" placeholder="Enter Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col className="d-flex gap-3 flex-wrap">
                <Form.Group className="flex-fill">
                  <Form.Label>Number</Form.Label>
                  <Form.Control name='userNumber' onChange={handleChange} type="number" placeholder="Enter Number" />
                </Form.Group>
                <Form.Group className="flex-fill">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='userPassword' onChange={handleChange} type="password" placeholder="Enter Password" />
                </Form.Group>
              </Col>
            </Row>

            <h6 className="title-login mb-4 text-secondary">
              Already have an account? <Link to={'/login'}>Login</Link>
            </h6>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </Form>
        </Col>

        {/* Right: Image */}
        <Col lg={6} className="login-img p-0 d-none d-lg-block">
          <img
            src={login}
            alt="Login Illustration"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
