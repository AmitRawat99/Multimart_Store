import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Treding_Product.scss';
import products from '../assets/Data/Product';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";

function ShopProducts({ category, keyword }) {
  const navigate = useNavigate();

  const filteredProducts = Object.values(products).filter(product => {
    const matchesCategory = category === 'Category' || product.category.toLowerCase() === category.toLowerCase();
    const matchesKeyword = !keyword || product.productName.toLowerCase().includes(keyword.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  const showdetails = (productId) => {
    navigate(`/shop/${productId}`);
  };
  

  return (
    <Container>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <Col lg="3" key={idx}>
              <div className="treding_product">
                <div className="treding_product_container">
                  <div className="treding_img">
                    <img src={product.imgUrl} alt="" />
                  </div>
                  <div className="treding_img">
                    <h2>{product.productName}</h2>
                    <span>{product.category}</span>
                  </div>
                  <div className="treding_icons">
                    <span>${product.price}</span>
                    <div className="product-icons gap-3">
                      <IoEyeSharp onClick={() => showdetails(product.id)} />
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Row>
    </Container>
  );
}

export default ShopProducts;
