import React, { useEffect, useState } from 'react';
import '../style/Cart.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  // // Load cart from localStorage on component mount

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItem")) || []
    setCartItems(storedCart)
  }, [])


  //  Delete item from cart

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart))
    setCartItems(updatedCart)
  }

  // Calculate totals

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = (subtotal * 0.18).toFixed(2);
  const total = (subtotal + parseFloat(tax)).toFixed(2);

  return (
    <Container className="cart-container py-5">
      <Row>
        {/* Cart Items */}
        <Col lg={8}>
          {/* Table Header */}
          <Row className="fw-bold text-center border-bottom pb-2">
            <Col md={2}>Image</Col>
            <Col md={3}>Title</Col>
            <Col md={2}>Price</Col>
            <Col md={2}>Quantity</Col>
            <Col md={2}>Delete</Col>
          </Row>

          {/* Cart Item Rows */}
          {cartItems.length === 0 ? (
            <p className="text-center mt-4">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <Row
                key={item.id}
                className="text-center align-items-center border-bottom py-3"
              >
                <Col md={2}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={3}>{item.title}</Col>
                <Col md={2}>₹{item.price}</Col>
                <Col md={2}>{item.qty}</Col>
                <Col md={2}>
                  <MdDelete
                    style={{ cursor: 'pointer', color: 'red' }}
                    onClick={() => handleDelete(item.id)}
                  />
                </Col>
              </Row>
            ))
          )}
        </Col>

        {/* Checkout Summary */}
        <Col lg={4}>
          <div className="p-4 border rounded shadow-sm bg-light mt-lg-0">
            <h4 className="mb-3 order-now">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>GST (18%):</span>
              <span>₹{tax}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold border-top pt-2">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button className="w-100 mt-4">
              Proceed to Checkout
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
