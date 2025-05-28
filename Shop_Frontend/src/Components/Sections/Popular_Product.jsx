import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FaPlus } from "react-icons/fa6";
import Title from '../../shared/Title'
import '../../style/Treding_Product.scss'

import Watch1 from '../../assets/images/Watch/watch-01.jpg'
import Watch2 from '../../assets/images/Watch/watch-02.jpg'
import Watch3 from '../../assets/images/Watch/watch-01.jpg'
import Watch4 from '../../assets/images/Watch/watch-01.jpg'
import { useNavigate } from 'react-router-dom';



function Popular_Product() {

    const navigate = useNavigate()

    const navigateProduct = () => {
        navigate('/shop');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const salesProducts = {
        1: {
            productImg: Watch1,
            productName: "Rolex Oyster Perpetual",
            productCategory: "Watch",
            productPrice: "99",
        },
        2: {
            productImg: Watch2,
            productName: "Omega Seamaster Diver",
            productCategory: "Watch",
            productPrice: "89",
        },
        3: {
            productImg: Watch3,
            productName: "Casio G-Shock Series",
            productCategory: "Watch",
            productPrice: "112",
        },
        4: {
            productImg: Watch4,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
    }

    return (
        <>
            <Title title={"Popular In Category's"} />
            <Container className='mt-5 mb-5'>
                <Row>
                    {
                        Object.values(salesProducts).map((product, idx) => {
                            return (
                                <Col lg="3" key={idx}>
                                    <div className="treding_product">
                                        <div className="treding_product_container">
                                            <div className="treding_img">
                                                <img src={product.productImg} alt="" />
                                            </div>
                                            <div className="treding_img">
                                                <h2>{product.productName}</h2>
                                                <span>{product.productCategory}</span>
                                            </div>
                                            <div className="treding_icons">
                                                <span>${product.productPrice}</span>
                                                <FaPlus onClick={navigateProduct} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Popular_Product


