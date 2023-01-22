import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Feedback from "./../Feedback/FeedBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isCreateUserFormValid } from "./../../Services/FormValidations";

const BoardBox = styled.div`
  padding-top: 32px;
  width: 100%;
  padding-bottom: 32px;
`;

const FormBox = styled.div`
  padding-top: 32px;

  grid-column: 2/8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 992px) {
    grid-column: 3/7;
  }

  input {
    font-family: "Varela Round", sans-serif;
  }
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    border-radius: 20px;
    margin-top: 16px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export default function CreateUser() {
  const [formInputs, setFormInputs] = useState({
    user: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [requestErrorAwnser, setRequestErrorAwnser] = useState(false);
  const [requestAwnser, setRequestAwnser] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    isFormValid: true,
    errorArray: [],
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  const createUser = async () => {
    if (isCreateUserFormValid(formInputs)) {
      await axios
        .post("http://localhost:5000/auth/singup", {
          formInputs,
        })
        .then((response) => {
          setRequestAwnser(response.data);
          navigate("/");
        })
        .catch((error) => {
          setRequestErrorAwnser(error.response.data);
        });
    }
  };

  return (
    <>
      <BoardBox>
        <LogoBox></LogoBox>
        <Grid>
          <FormBox>
            <TextField
              fullWidth
              id="outlined-name"
              label="User"
              name="user"
              value={formInputs.user}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              id="outlined-name"
              label="Email"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              fullWidth
              id="outlined-name"
              label="Password"
              name="password"
              value={formInputs.password}
              onChange={handleChange}
            />
            <TextField
              type="password"
              fullWidth
              id="outlined-name"
              label="Password check"
              name="passwordCheck"
              value={formInputs.passwordCheck}
              onChange={handleChange}
            />

            {validationErrors.errorArray.length !== 0 && (
              <Feedback
                status={validationErrors.errorArray[0]}
                success={false}
                display={!validationErrors.isFormValid}
              />
            )}

            <Feedback
              status={requestErrorAwnser}
              success={false}
              display={requestErrorAwnser}
            />
            <Button
              onClick={() => {
                createUser();
              }}
              fullWidth
              variant="contained"
            >
              Create user
            </Button>
          </FormBox>
        </Grid>
      </BoardBox>
    </>
  );
}
