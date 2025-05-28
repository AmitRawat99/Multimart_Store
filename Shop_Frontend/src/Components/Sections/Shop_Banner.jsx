import React from 'react'
import '../../style/Banner.scss'
import { Container, Row, Col } from 'reactstrap'
import BannerImg from '../../assets/images/shop_product.png'
import { useNavigate } from 'react-router-dom'

function Shop_Banner() {
    const navigate = useNavigate()

    const navigateContact = () =>{
        navigate('/contact')
    }
    return (
        <>
            <section className='Container-fluid' id='container-fluid'>
                <Container>
                    <Row >
                        <Col lg="6">
                            <div className="banner_content">
                                <h3>Treding products in 2025</h3>
                                <h1>Choose Your Product's</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit eius quae tempora..</p>
                                <button onClick={navigateContact}>Contact Now</button>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="Banner_img">
                                <img src={BannerImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Shop_Banner
