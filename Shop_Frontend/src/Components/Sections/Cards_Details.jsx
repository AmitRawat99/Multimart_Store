import React, { useState } from 'react';
import { Button, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Img from '../../assets/images/Chairs/double-sofa-04.png';
import { FaStar } from "react-icons/fa";
import products from '../../assets/Data/Product';
import '../../style/Cards_Details.scss';
import { FaPlus } from "react-icons/fa6";

import Watch1 from '../../assets/images/Watch/watch-01.jpg'
import Watch2 from '../../assets/images/Watch/watch-02.jpg'
import Wireless1 from '../../assets/images/Phone/wireless-01.png'
import Wireless2 from '../../assets/images/Phone/wireless-02.png'

import phone1 from '../../assets/images/Phone/phone-01.jpg'
import phone2 from '../../assets/images/Phone/phone-02.jpg'
import sofa1 from '../../assets/images/Chairs/single-sofa-01.jpg'
import sofa2 from '../../assets/images/Chairs/single-sofa-02.jpg'
import { useParams } from 'react-router-dom';
import productss from '../../assets/Data/Product';

import { FaMinus } from "react-icons/fa";


function Cards_Details() {
    const { id } = useParams()
    const [Increament, setIncreament] = useState(1)

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
            productImg: Wireless2,
            productName: "Casio G-Shock Series",
            productCategory: "Watch",
            productPrice: "112",
        },
        4: {
            productImg: Wireless1,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
        5: {
            productImg: phone1,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
        6: {
            productImg: phone2,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
        7: {
            productImg: sofa1,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
        8: {
            productImg: sofa2,
            productName: "Tissot Classic Dream",
            productCategory: "Watch",
            productPrice: "199",
        },
    }

    const product = productss.find(p => p.id.toString() === id)

    if (!product) {
        return <h3 className='text-center'>Not Found Products</h3>
    }

    const { category, imgUrl, shortDesc, productName, description, price, reviews, avgRating } = product;
    const ProductRate = product.price * Increament;
    const qty = Increament
    const AddProduct = () => {
        const currentCart = JSON.parse(localStorage.getItem("cartItem")) || [];
        const exists = currentCart.find(item => item.id == product.id);

        if (!exists) {
            currentCart.push({
                id: product.id,
                title: product.productName,
                price: ProductRate,
                qty: qty,
                image: product.imgUrl,
            });
            localStorage.setItem("cartItem", JSON.stringify(currentCart))
            alert("Product Added To Cart")
        }
        else {
            alert("Product Already Added In Cart")
        }
    }


    const IncreamentValue = () => {
        setIncreament(Increament + 1)
    }

    const DecreamentValue = () => {
        if (Increament <= 1) {
            setIncreament(1)
        }
        else {
            setIncreament(Increament - 1)
        }
    }


    return (
        <Container>
            <Row className="product_cards">
                <Col lg={6}>
                    <img src={imgUrl} alt="Product" className="img-fluid" />
                </Col>
                <Col lg={6}>
                    <div className="product_container">
                        <div className="product-details">
                            <div className="product_name">
                                <h2>{productName}</h2>
                            </div>
                            <div className="product_rating d-flex justify-content-between align-items-center">
                                <div className="product-stars me-2">
                                    {[...Array(5)].map((_, idx) => (
                                        <FaStar key={idx} />
                                    ))}
                                </div>
                                <div>
                                    <span id='avgRating'>{avgRating} <sup><FaStar /></sup></span>
                                </div>
                            </div>
                            <div className="product_price mt-3 d-flex justify-content-between align-items-center">
                                <h3>${ProductRate}</h3>
                                <p>{category}</p>
                            </div>
                            <div className="qty-container d-flex gap-5">
                                <p onClick={DecreamentValue}><FaMinus /></p>
                                <span>{Increament}</span>
                                <p onClick={IncreamentValue}><FaPlus /></p>
                            </div>
                            <div className="product_info mt-3">
                                <p>{description}</p>
                            </div>
                            <div className="product-btn mt-3">
                                <button onClick={AddProduct} >Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Tabs Section for Description and Review */}

            <Tabs defaultActiveKey="review" id="product-tabs" className="mt-5">
                <Tab eventKey="description" title="Description">
                    <div className="product_description mt-3">
                        <p>{description}</p>
                        <p>{shortDesc}</p>
                    </div>
                </Tab>
                <Tab eventKey="review" title="Review">
                    <div className="product_review mt-3">
                        {Array.isArray(reviews) && reviews.map((review, index) => (
                            <div key={index}>
                                <p>Rating: {review.rating} / 5</p>
                                <p>{review.text}</p>
                            </div>
                        ))}
                    </div>
                </Tab>
            </Tabs>
            <div className="our-products mt-5">
                <Container>
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
                                                    <FaPlus />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default Cards_Details;
