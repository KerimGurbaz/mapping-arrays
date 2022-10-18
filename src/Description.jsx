import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Description = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center ">
      <Row className="w-50 p-3">
        <Col
          style={{ backgroundColor: "#FFAEBC" }}
          className="p-3 rounded-3 h3 text-white"
        >
          Prime Numbers
        </Col>
        <Col
          style={{ backgroundColor: "#B4F8C8" }}
          className="p-3 h3 mx-1 rounded-3 text-white"
        >
          Odd Numbers
        </Col>
        <Col
          style={{ backgroundColor: "#A0E7E5" }}
          className="p-3 rounded-3 h3 text-white"
        >
          Even Numbers
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
