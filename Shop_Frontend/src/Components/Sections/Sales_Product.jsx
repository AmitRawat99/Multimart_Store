import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FaPlus } from "react-icons/fa6";
import Title from '../../shared/Title'
import '../../style/Treding_Product.scss'
import sofa1 from '../../assets/images/Chairs/double-sofa-01.png'
import sofa2 from '../../assets/images/Chairs/double-sofa-02.png'
import sofa3 from '../../assets/images/Chairs/double-sofa-03.png'
import sofa4 from '../../assets/images/Chairs/double-sofa-04.png'

import sofa5 from '../../assets/images/Chairs/single-sofa-01.jpg'
import sofa6 from '../../assets/images/Chairs/single-sofa-02.jpg'
import sofa7 from '../../assets/images/Chairs/single-sofa-03.jpg'
import sofa8 from '../../assets/images/Chairs/single-sofa-04.png'
import { useNavigate } from 'react-router-dom';


function Sales_Product() {
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
            productImg: sofa1,
            productName: "The Grand Haven Luxe Sofa",
            productCatagory: "Chair",
            productPrice: "99",
        },
        2: {
            productImg: sofa2,
            productName: "The Velvet Cloud Comfort Lounger",
            productCatagory: "Chair",
            productPrice: "89",
        },
        3: {
            productImg: sofa3,
            productName: "The Urban Nest Modular Sectional",
            productCatagory: "Chair",
            productPrice: "112",
        },
        4: {
            productImg: sofa4,
            productName: "The Royal Crest Tufted Chesterfield",
            productCatagory: "Chair",
            productPrice: "199",
        },
        5: {
            productImg: sofa5,
            productName: "Flluy Sheep Sofa",
            productCatagory: "Chair",
            productPrice: "199",
        },
        6: {
            productImg: sofa6,
            productName: "Faux Valvet Sofa",
            productCatagory: "Chair",
            productPrice: "199",
        },
        7: {
            productImg: sofa7,
            productName: "Fully Sheep Sofa",
            productCatagory: "Chair",
            productPrice: "199",
        },
        8: {
            productImg: sofa8,
            productName: "Modern Arm Sofa",
            productCatagory: "Chair",
            productPrice: "199",
        },
    }

    return (
        <>
            <Title title={"Sales Product"} />
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
                                                <span>{product.productCatagory}</span>
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

export default Sales_Product
