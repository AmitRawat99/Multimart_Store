import React from 'react'
import Title from '../../shared/Title'
import { Container, Row, Col } from 'reactstrap'
import { FaPlus } from "react-icons/fa6";
import '../../style/Treding_Product.scss'
import chair1 from '../../assets/images/Chairs/arm-chair-01.jpg'
import chair2 from '../../assets/images/Chairs/arm-chair-02.jpg'
import chair3 from '../../assets/images/Chairs/arm-chair-03.jpg'
import chair4 from '../../assets/images/Chairs/arm-chair-01.jpg'
import chair5 from '../../assets/images/Chairs/single-sofa-03.jpg'
import { useNavigate } from 'react-router-dom';



function Treding_Product() {

    const navigate = useNavigate()

    const navigateProduct = () => {
        navigate('/shop');
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    const tredingProduct = {
        1: {
            productImg: chair1,
            productName: "Sakarias Armchair",
            productCatagory: "Chair",
            productPrice: "99",
        },
        2: {
            productImg: chair2,
            productName: "Baltsar Chair",
            productCatagory: "Chair",
            productPrice: "89",
        },
        3: {
            productImg: chair3,
            productName: "Halmar Chair",
            productCatagory: "Chair",
            productPrice: "112",
        },
        4: {
            productImg: chair4,
            productName: "Sakarias Armchair",
            productCatagory: "Chair",
            productPrice: "199",
        },
    }

    return (
        <>
            <Title title={"Treding Products"} />
            <Container className='mt-5 mb-5'>
                <Row>
                    {
                        Object.values(tredingProduct).map((product, idx) => {
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

export default Treding_Product
