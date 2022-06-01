import React from "react";
import { connect } from "react-redux";
import { resetResult } from "../Redux/actions";
import Container from "react-bootstrap/Container";
import "../style/result.scss";
import { Card, Col, Row } from "react-bootstrap";
import hundred from "../images/100.png";
import seventy from "../images/70.png";
import bad from "../images/studymore.png";

const Results = ({ result, resetResult }) => {
  return (
    <Container fluid={true} className="container-lg result">
      <Row className="p-0 justify-content-md-between justify-content-center align-items-center result-row m-auto">
        <Col md={7} className="order-2 order-md-1 my-5 mb-md-0 text-center">
          <Card className="text-center p-0 ">
            <div className="card-header py-3 bg-dark">
              {/* display the question text */}
              <h2>Final Result</h2>
            </div>
            <div className="card-body">
              <p className="lead">
                Your final result is {Math.round(parseInt(result))}% out of 100%
              </p>
              <button
                className="btn btn-info my-5"
                onClick={() => {
                  resetResult();
                }}
              >
                Reset Quiz
              </button>
            </div>
          </Card>
        </Col>
        <Col md={5} className="order-1 order-md-2 text-center my-5 mb-md-0">
          {parseInt(result) > 70 ? (
            <img className="img-fluid " src={hundred} alt="amazing" />
          ) : (
            ""
          )}
          {parseInt(result) > 50 && parseInt(result) < 70 ? (
            <img className="img-fluid" src={seventy} alt="good" />
          ) : (
            ""
          )}
          {parseInt(result) < 50 ? (
            <img className="img-fluid" src={bad} alt="bad" />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps({ result }) {
  console.log(result);
  return {
    result: result.result,
  };
}

export default connect(mapStateToProps, { resetResult })(Results);
