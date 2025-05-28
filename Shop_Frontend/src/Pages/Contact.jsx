import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import ContactBanner from '../assets/images/contact_banner (2).png'
import '../style/Contact.scss'
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function Contact() {

     const navigate = useNavigate()

    const navigateContact = () =>{
        navigate('/shop')
    }

  return (
    <>
      <Container fluid className='container_box'>
        <Container>

          <Row className='contact-container'>
            <Col lg='6' >
              <div className="contact-content">
                <h2>Contact Now</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus consectetur tenetur...</p>
                <button onClick={navigateContact}>Shop Now</button>
              </div>
            </Col>
            <Col lg='6'>
              <div className="contact-content">
                <img src={ContactBanner} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <div className='form-container-box'>
          <Col lg='6'>
            <div className="location-componets">
              <div className="location-title">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus corporis, quae asperiores sapiente amet et animi hic. Reiciendis in facere, porro suscipit velit nobis optio, impedit deserunt facilis nostrum sit.</p>
              </div>
              <div className="location-cards">
                <div className="location-description">
                  <FaLocationDot />
                </div>
                <div className="location-content">
                  <h2>Head Office</h2>
                  <p>Delhi Uttam Nagar 103040</p>
                </div>
              </div>
              <div className="location-cards">
                <div className="location-description">
                  <FaLocationDot />
                </div>
                <div className="location-content">
                  <h2>Email</h2>
                  <a href="mailto:amitrawat789599@gmail.com">amitrawat789599@gmail.com</a>
                </div>
              </div>
              <div className="location-cards">
                <div className="location-description">
                  <FaLocationDot />
                </div>
                <div className="location-content">
                  <h2>Contact Us</h2>
                  <a href="callto:9027548872">+91 9027548872</a>
                </div>
              </div>
              <div className="follow-container">
                <div className="follow-title">
                  <h2>Follow</h2>
                </div>
                <div className="follow-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="input-container">
              <div className="input-title">
                <h2>Send us a message</h2>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Col>
                    <Col lg={6} >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                    </Col>
                  </Row>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formSubject">
                  <Row>
                    <Col lg={6}>
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Subject" />
                    </Col>
                    <Col lg={6}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Phone Number" />
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Row>
                    <Col lg={12}>
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                    </Col>
                  </Row>
                </Form.Group>

                <button type="submit">
                  Send Message
                </button>
              </Form>
            </div>
          </Col>
        </div>
      </Container>
      <Container fluid>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.131010558656!2d77.04242715107513!3d28.62128659650511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9e11a08cf%3A0xc1a5a267ef8fd396!2sUttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1747550869790!5m2!1sen!2sin" width='100%' height='500' style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </>
  )
}

export default Contact
