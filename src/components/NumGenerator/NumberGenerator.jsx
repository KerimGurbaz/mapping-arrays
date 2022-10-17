import React from "react";
import Number from "../Number";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NumberGenerator = ({ value }) => {
  let num = 0;
  console.log(typeof value);

  let x = +value;
  console.log(typeof x);

  const numbers = [];
  for (let i = 0; i <= x; i++) {
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
