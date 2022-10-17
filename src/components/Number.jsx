import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Number = ({ numbers }) => {
  console.log(numbers);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    color: "white",
  };

  return (
    <Container className="bg-warning display-5">
      <Row>
        <Col style={containerStyle}>
          {numbers.map((number) => {
            if (number === 0) {
              return (
                <Col
                  sm={3}
                  md={2}
                  lg={1}
                  className="p-2 m-1"
                  style={{ backgroundColor: "green" }}
                >
                  {number}
                </Col>
              );
            } else if (number === 1) {
              return (
                <Col
                  className="m-1"
                  sm={3}
                  md={2}
                  lg={1}
                  style={{ backgroundColor: "yellow" }}
                >
                  {number}
                </Col>
              );
            } else {
              let prime = true;
              function isPrime(num) {
                for (let i = 2; i < num; i++) if (num % i === 0) return false;
                return true;
              }

              if (isPrime(number) === prime) {
                return (
                  <Col
                    className="m-1"
                    sm={3}
                    md={2}
                    lg={1}
                    style={{ backgroundColor: "red" }}
                  >
                    {number}
                  </Col>
                );
              }
              if (isPrime(number) !== prime && number % 2 === 0) {
                return (
                  <Col
                    className="m-1"
                    sm={3}
                    md={2}
                    lg={1}
                    style={{ backgroundColor: "green" }}
                  >
                    {number}
                  </Col>
                );
              }

              if (isPrime(number) !== prime && number % 2 !== 0) {
                return (
                  <Col
                    className="m-1"
                    sm={3}
                    md={2}
                    lg={1}
                    style={{ backgroundColor: "yellow" }}
                  >
                    {number}
                  </Col>
                );
              }
            }
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Number;
