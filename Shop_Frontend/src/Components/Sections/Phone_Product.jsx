import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FaPlus } from "react-icons/fa6";
import Title from '../../shared/Title'
import '../../style/Treding_Product.scss'


import Phone1 from '../../assets/images/Phone/phone-01.jpg'
import Phone2 from '../../assets/images/Phone/phone-02.jpg'
import Phone3 from '../../assets/images/Phone/phone-03.png'
import Phone4 from '../../assets/images/Phone/phone-04.jpg'

import Phone5 from '../../assets/images/Phone/phone-05.jpg'
import Phone6 from '../../assets/images/Phone/phone-06.jpg'
import Phone7 from '../../assets/images/Phone/wireless-01.png'
import Phone8 from '../../assets/images/Phone/wireless-02.png'
import { useNavigate } from 'react-router-dom';


function Phone_Product() {

    const navigate = useNavigate()

    const navigateProduct = () => {
        navigate('/shop');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const SalesProduct = {
        1: {
            productImg: Phone1,
            productName: "iPhone 14 Pro Max",
            productCategory: "Phone",
            productPrice: "1099",
        },
        2: {
            productImg: Phone2,
            productName: "Samsung Galaxy S23 Ultra",
            productCategory: "Phone",
            productPrice: "1199",
        },
        3: {
            productImg: Phone3,
            productName: "OnePlus 11 5G",
            productCategory: "Phone",
            productPrice: "699",
        },
        4: {
            productImg: Phone4,
            productName: "Google Pixel 8 Pro",
            productCategory: "Phone",
            productPrice: "999",
        },
        5: {
            productImg: Phone5,
            productName: "Motorola Edge+",
            productCategory: "Phone",
            productPrice: "799",
        },
        6: {
            productImg: Phone6,
            productName: "Xiaomi 13 Pro",
            productCategory: "Phone",
            productPrice: "899",
        },
        7: {
            productImg: Phone7,
            productName: "Nothing Phone (2)",
            productCategory: "Wireless Headphone's",
            productPrice: "749",
        },
        8: {
            productImg: Phone8,
            productName: "Asus ROG Phone 7",
            productCategory: "Wireless Headphone's",
            productPrice: "999",
        },
    }

    return (
        <>
            <Title title={"New Arrivals"} />
            <Container className='mt-5 mb-5'>
                <Row>
                    {
                        Object.values(SalesProduct).map((product, idx) => {
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

export default Phone_Product
