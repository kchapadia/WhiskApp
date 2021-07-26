import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./LoginScreen.css";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/myrecipes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const resetHandler = (e) =>{
    e.preventDefault();
  }

  const togglePopup = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
    {isOpen && <ForgotPassword
                    content={<>
                    <b>Please enter your email</b>
                    <Form onSubmit={resetHandler}>
                      <Form.Group controlId="resetEmail">
                        <Form.Control 
                          placeholder="Enter email"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                      Reset Password
                    </Button>
                    </Form>
                    </>}
                    handleClose={togglePopup}
                    />}
    <div className="Container">
      <div className="loginDiv">
        <div className="loginForm">
          <MainScreen title="LOGIN">
            <div className="loginContainer">
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading />}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="button_password_container">
                  <div className="button_container">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    </div>
                  <div className="forgot_password">
                    <Link onClick={togglePopup}>Forgot Password?</Link>
                  </div>
                </div>
                </Form>
              <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
            </div>
          </MainScreen>
        </div>
      </div>
      <div className="foodPic">
        <div className="fPic">
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginScreen;
