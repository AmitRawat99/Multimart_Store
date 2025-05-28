import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import login from '../assets/images/login/login.jpg';
import '../style/userProfile.scss';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import Base_Url from '../config/Base_url';


function Login() {
    const navigateUrl = useNavigate()
    const { User, setUser } = useContext(UserContext)
    const [message, setMessage] = useState(null)

    const [loginUser, setLoginUser] = useState({
        userName: "",
        userEmail: "",
        userNumber: "",
        userPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser(prev => ({ ...prev, [name]: value }))
    }


    const LoginAccount = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${Base_Url}/login-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(loginUser)
            })

            const result = await response.json()

            if (response.ok) {
                setUser(result.user || null);
                setMessage({ type: "success", text: "Login Successfully" });
                navigateUrl('/');
            } else {
                setMessage({ type: "danger", text: result.message || "Login failed" });
            }


            // navigateUrl('/')

        } catch (error) {
            console.error("Something went wrong:", error);
            setMessage({ type: "danger", text: "Network error or server issue." });
        }
    }


    return (
        <Container className="login-container py-5">
            <Row className="form-section align-items-center shadow-lg rounded-4 overflow-hidden">
                <Col lg={6} className="form p-5 bg-white">
                    <h2 className="title-login mb-4 text-primary fw-bold">Login to Your Account</h2>
                    <Form onSubmit={LoginAccount}>
                        <Row className="mb-4">
                            <Col className="d-flex gap-3 flex-wrap">
                                <Form.Group className="flex-fill">
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control onChange={handleChange} name='userName' type="text" placeholder="Enter User Name" />
                                </Form.Group>
                                <Form.Group className="flex-fill">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={handleChange} name='userEmail' type="email" placeholder="Enter Email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col className="d-flex gap-3 flex-wrap">
                                <Form.Group className="flex-fill">
                                    <Form.Label>Number</Form.Label>
                                    <Form.Control onChange={handleChange} name='userNumber' type="number" placeholder="Enter Number" />
                                </Form.Group>
                                <Form.Group className="flex-fill">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={handleChange} name='userPassword' type="password" placeholder="Enter Password" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h2 className="title-login mb-4 text-primary fw-bold">Don't have an account <Link to={'/signup'}>Login</Link></h2>

                        <button type="submit" className='w-100'>Login</button>

                    </Form>
                </Col>


                {/* Right side: Image */}

                <Col lg={6} className="login-img p-0 d-none d-lg-block">
                    <img src={login} alt="Login Illustration" className="img-fluid w-100 h-100 object-fit-cover" />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
