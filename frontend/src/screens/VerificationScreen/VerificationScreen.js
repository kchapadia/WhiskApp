import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { verify } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import { Button, Form } from "react-bootstrap";
import "./VerificationScreen.css";

function VerificationScreen({ history }) {
  const [temporarytoken, setTemporarytoken] = useState("");

  const dispatch = useDispatch();

  const userVerify = useSelector((state) => state.userVerify);
  const { loading, error, userInfo } = userVerify;

  useEffect(() => {
    if (userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(verify(temporarytoken));
  };

  return (
    <MainScreen title="Account Verification">
      <div className="verifyContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicTemporarytoken">
            <Form.Label>Activation token</Form.Label>
            <Form.Control
              type="temporarytoken"
              value={temporarytoken}
              placeholder="Enter activation token"
              onChange={(e) => setTemporarytoken(e.target.value)}
            />
          </Form.Group>

          <div className="buttonContainer">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="activatebutton"
            >
              Activate
            </Button>
          </div>
        </Form>
      </div>
    </MainScreen>
  );
}

export default VerificationScreen;
