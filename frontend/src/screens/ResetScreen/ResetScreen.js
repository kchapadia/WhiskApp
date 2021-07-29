import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { reset } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import { Button, Form } from "react-bootstrap";
import "./ResetScreen.css";

function ResetScreen({ history }) {
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [temporarytoken, setTemporarytoken] = useState("");

  const dispatch = useDispatch();

  const userReset = useSelector((state) => state.userReset);
  const { loading, error, userInfo } = userReset;

  useEffect(() => {
    if (userInfo) {
      history.push("/myrecipes");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(reset(temporarytoken, newpassword, confirmpassword));
  };

  return (
    <MainScreen title="Reset Password">
      <div className="verifyContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicTemporarytoken">
              <Form.Group controlId="formBasicTemporarytoken">
            <Form.Label>Activation token</Form.Label>
            <Form.Control
              type="temporarytoken"
              value={temporarytoken}
              placeholder="Enter activation token"
              onChange={(e) => setTemporarytoken(e.target.value)}
            />
          </Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={newpassword}
              placeholder="Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicTemporarytoken">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className="buttonContainer">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="activatebutton"
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </div>
    </MainScreen>
  );
}

export default ResetScreen;