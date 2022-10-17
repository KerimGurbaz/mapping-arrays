import React from "react";
import Number from "../Number";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NumberGenerator = () => {
  let num = 0;
  const numbers = [];
  for (let i = 0; i < 32; i++) {
    num = i;
    numbers.push(num);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Number numbers={numbers} />
        </Col>
      </Row>
    </Container>
  );
};

export default NumberGenerator;
