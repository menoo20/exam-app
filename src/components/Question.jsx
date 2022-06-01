import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQuestionsApi, setResult, showResult } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import "../style/questions.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import boy from "../images/2.png";
import girl from "../images/1.png";
import quiz from "../images/3.png";

const Question = ({
  getQuestionsApi,
  user,
  questions,
  setResult,
  showResult,
  result,
  reset,
}) => {
  //states to be used within the component
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(1);

  const navigate = useNavigate();

  //reset useEffect checks the redux state of reset and behave upon that
  useEffect(() => {
    if (reset) {
      getQuestionsApi();
      setCorrectAnswers(1);
      setCurrentQuestion(0);
    }
  }, [reset, getQuestionsApi]);

  //get all questions if the user is authenticated
  //extra layer for authentication
  useEffect(() => {
    if (user.id) {
      getQuestionsApi();
    }
  }, []);

  //this useEffect is used to navigate to the result route
  useEffect(() => {
    if (result) {
      showResult(true);
      navigate("/results");
    }
  }, [result, navigate, showResult]);

  //the most important function which handles the different states when the student answer a question
  const handleAnswering = (isCorrect) => {
    // isCorrect is used to check the right answer;
    console.log(isCorrect);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion + 1 === questions.length) {
      setCurrentQuestion(currentQuestion);
      const result = Math.round((correctAnswers / questions.length) * 100);

      setResult(result);
    }
    console.log(correctAnswers);
  };

  return (
    <>
      {questions ? (
        <Container
          fluid={true}
          className="container-lg align-items-center justify-content-center"
        >
          <Row
            className="p-0 justify-content-md-between justify-content-center align-items-center "
            style={{ width: "100%" }}
          >
            <h1>
              Question {currentQuestion + 1} of {questions.length}
              <span className="ms-3">
                <img
                  width="40 "
                  className="img-fluid "
                  src={quiz}
                  alt="quiz"
                ></img>
              </span>
            </h1>
            <Col md={7}>
              <Card className="text-center p-0">
                <Card.Header className="text-white bg-dark py-3">
                  {/* display the question text */}
                  <h2 className="mb-0 ">{questions[currentQuestion].text}</h2>
                </Card.Header>
                <Card.Body>
                  <ListGroup>
                    {questions[currentQuestion].options.map((option) => {
                      return (
                        <ListGroup.Item
                          key={option.id}
                          onClick={() => handleAnswering(option.isCorrect)}
                          className="my-2 py-3 option"
                        >
                          <span className="me-2">{option.id + 1}.</span>
                          {option.text}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} className="text-end d-none d-md-block position-relative">
              <img
                className="image-fluid avatar"
                height="400"
                src={currentQuestion % 2 === 0 ? boy : girl}
                alt="thinking boy"
              />
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

function mapStateToProps({ user, questions, result }) {
  return {
    questions: questions.length ? questions : null,
    user: user.id ? user : null,
    show: result.show,
    result: result.result,
    reset: result.reset,
  };
}

export default connect(mapStateToProps, {
  getQuestionsApi,
  setResult,
  showResult,
})(Question);
