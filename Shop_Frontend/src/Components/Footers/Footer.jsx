import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../style/Footer.scss';
import { FaArrowUp } from "react-icons/fa";


function Footer() {

  const [activeScroll, setactiveScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setactiveScroll(true)
      }
      else {
        setactiveScroll(false)
      }

    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  const scrollbar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <footer className="footer-section">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="footer-col">
              <div className="footer-widget">
                <h4 className="footer-title">Multiple</h4>
                <p className="footer-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis qui fugiat dolorem est, suscipit, temporibus modi commodi beatae tempora possimus inventore quidem accusamus adipisci repellendus.
                </p>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="footer-col">
              <div className="footer-widget">
                <h4 className="footer-title">Top Categories</h4>
                <ul className="footer-links">
                  <li><a href="#">Mobile Phones</a></li>
                  <li><a href="#">Modern Sofas</a></li>
                  <li><a href="#">Arm Chairs</a></li>
                  <li><a href="#">Smart Watches</a></li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="footer-col">
              <div className="footer-widget">
                <h4 className="footer-title">Useful Links</h4>
                <ul className="footer-links">
                  <li><a href="#">Sofa</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="footer-col">
              <div className="footer-widget">
                <h4 className="footer-title">Contact</h4>
                <address className="footer-contact">
                  <p>Delhi, Uttam Nagar, Happy Chowk, Gali No. 34, 203455</p>
                  <p><a href="tel:+91879425883">+91 87942 5883</a></p>
                  <p><a href="mailto:example123@gmail.com">example123@gmail.com</a></p>
                </address>
              </div>
            </Col>
          </Row>

          <div className="footer-bottom text-center mt-4">
            <p>&copy; {new Date().getFullYear()} Multiple. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
      <div className="scrollBar">
        {
          activeScroll && (
            <div className="scroll_bar_icon" onClick={scrollbar}>
              <FaArrowUp />
            </div>
          )
        }
      </div>
    </>

  );
}

export default Footer;
