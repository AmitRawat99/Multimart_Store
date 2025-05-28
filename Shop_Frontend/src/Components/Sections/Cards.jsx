// src/components/UI/Cards.js
import React from 'react';
import serviceData from '../../assets/Data/ServiceData';
import { Container, Col, Row } from 'reactstrap';
import '../../style/Card.scss'

function Cards() {
    return (
        <Container>
            <Row>
                {
                    serviceData.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <Col lg="3" md="4" sm="6" key={idx}>
                                <div
                                    className="cards_section gap-2 d-flex p-3 text-center mt-5"
                                    style={{ backgroundColor: card.bg, borderRadius: "5px" }}
                                >
                                    <div className="card_images mb-2">
                                        <Icon size={45} />
                                    </div>
                                    <div className="card_Content">
                                        <h5>{card.title}</h5>
                                        <p>{card.subtitle}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default Cards;
