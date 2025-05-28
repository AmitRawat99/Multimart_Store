import React from 'react'
import '../../style/Banner.scss'
import { Container, Row, Col } from 'reactstrap'
import BannerImg from '../../assets/images/hero-img.png'
import img from '../../assets/images/shop_banner.png'
import { useNavigate } from 'react-router-dom'

function Banner() {

    const navigate = useNavigate()

    const navigatePage = () =>{
        navigate('/shop')
    }

    return (
        <>
            <section className='Container-fluid'>
                <Container className='Container'>
                    <Row >
                        <Col lg="6">
                            <div className="banner_content">
                                <h3>Treding products in 2025</h3>
                                <h1>Make Your Interior More Minimalistic & Modern</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit eius quae tempora..</p>
                                <button onClick={navigatePage}>Shop Now</button>
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

export default Banner
