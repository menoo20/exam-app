import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkUserApi } from "../Redux/actions";
import { connect } from "react-redux";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InfoCircle from "react-bootstrap-icons/dist/icons/info-circle";

//customizing bs style here
import "../style/login2.scss";

//validation schema
const schema = yup
  .object({
    email: yup
      .string()
      .required("Can't Be Empty")
      .email("Must Be email form with @ and ."),
    password: yup.string().required("Please Enter Your Password"),
  })
  .required();

const Login = ({ checkUserApi, user, error }) => {
  //define useForm hook and add the yup schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [Error, setError] = useState("");

  const navigate = useNavigate();

  // this useEffect is used to navigate the user to homepage on successful login
  //it waits for 1 sec before work as a way to simulate an api response
  useEffect(() => {
    if (user.name) {
      setTimeout(() => {
        setError("");
        navigate("/");
      }, 1000);
    } else {
      setError(error);
    }
  });

  //toast arguments
  const toastId = React.useRef(null);

  const check = () => (toastId.current = toast.loading("please wait ..."));

  const dismiss = () => toast.dismiss(toastId.current);

  //onSubmit is going to call the checkUser function and behave depending on the response
  let timeout;
  const onSubmit = (data) => {
    timeout = setTimeout(check, 0);
    checkUserApi(data);
    setTimeout(dismiss, 1000);
  };

  return (
    <Container fluid={true} className="container-lg">
      <Stack className="stack align-items-center justify-content-center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mb-5 text-center">Student Login</h1>
          {Error.length ? (
            <p className="col-12 text-center" style={{ color: "red" }}>
              <InfoCircle className="me-2"></InfoCircle>
              {Error}
            </p>
          ) : (
            ""
          )}
          {/* email group */}
          <Form.Group className="pb-0 " controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
            >
              <Form.Control
                type="email"
                className="input ps-4"
                placeholder="Enter email"
                {...register("email")}
              />
            </FloatingLabel>
            <Form.Text>
              <p
                className={`error ps-3 pt-2 ${
                  errors.email ? "active" : ""
                }`}
                style={{ color: "red" }}
              >
                {errors.email ? (
                  <InfoCircle className="me-2"></InfoCircle>
                ) : (
                  ""
                )}
                {errors.email?.message}
              </p>
            </Form.Text>
          </Form.Group>

          {/* password group */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
            >
              <Form.Control
                type="password"
                className="input ps-4"
                placeholder="Password"
                {...register("password")}
              />
            </FloatingLabel>
            <Form.Text >
              <p
                className={`error ps-3 pt-2 ${
                  errors.password ? "active" : ""
                } `}
                style={{ color: "red"}}
              >
                {errors.password ? (
                  <InfoCircle className=" me-2"></InfoCircle>
                ) : (
                  ""
                )}
                {errors.password?.message}
              </p>
            </Form.Text>
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-3 mb-4 px-5 py-3 text-center col-12 col-md-8 col-lg-5  align-self-md-start"
          >
            Login
          </Button>
        </Form>
      </Stack>
    </Container>
  );
};

const mapStateToProps = ({ user, error }) => {
  console.log(user, error);
  return {
    user,
    error,
  };
};

export default connect(mapStateToProps, { checkUserApi })(Login);
