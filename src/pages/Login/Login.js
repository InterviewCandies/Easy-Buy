import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo/Logo";
import Lock from "../../asset/img/lock.svg";
import User from "../../asset/img/user2.svg";
import GithubIcon from "../../asset/img/github-big-logo.svg";
import GoogleIcon from "../../asset/img/google.png";
import { useHistory } from "react-router-dom";
import { AUTHEN_TOKEN, PRIMARY_COLOR, SECONDARY_COLOR } from "../../common";
import { db } from "../../service/firebase";
import { compare } from "../../utils/hashHelper";
import {
  signInWithGithub,
  signInWithGoogle,
} from "../../service/authentication";
import { useSnackbar } from "notistack";
const Form = styled.form`
  background-color: #f0f0f3;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
`;
const InputLabel = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.p`
  font-size: 0.85rem;
  margin: 8px;
  font-weight: 600;
`;
const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
const Box = styled.div`
  width: 300px;
  padding: 20px 10px 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Subtitle = styled.p`
  font-family: "Rozha One", serif;
  font-size: 1rem;
  margin-bottom: 30px;
  margin-top: 5px;
`;
const SmallText = styled.p`
  font-size: 0.75rem;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${PRIMARY_COLOR};
`;

const Button = styled.button`
  padding: 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.color || "#0f56b3"};
  width: 100%;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    background-color: #cecece;
  }
`;
const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ff0033;
  padding-top: 5px;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    filter: invert(1);
  }
`;

function Login() {
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checking, setChecking] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  // prevent user from going back to the login page after login
  useEffect(() => {
    let isAuth = localStorage.getItem(AUTHEN_TOKEN);
    if (isAuth && isAuth !== "undefined") {
      history.push("/all");
      enqueueSnackbar("You need to log out first", { variant: "warning" });
    }
  }, []);

  const checkCredential = (inputUser, databaseUser) => {
    if (compare(inputUser.password, databaseUser.password)) {
      localStorage.setItem(AUTHEN_TOKEN, databaseUser.username);
      history.push("/all");
      return;
    }
    setPasswordError("Wrong password. Try again");
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        localStorage.setItem(AUTHEN_TOKEN, result.user.email);
        history.push("/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        localStorage.setItem(AUTHEN_TOKEN, result.user.email);
        history.push("/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmit = async (data) => {
    setErrorMessage("");
    setPasswordError("");
    setChecking(true);
    try {
      await db()
        .ref("users")
        .orderByChild("username")
        .equalTo(data.username)
        .once("value", async function (snapshot) {
          if (snapshot.exists()) {
            snapshot.forEach(async (user) => {
              await checkCredential(data, user.val());
              setChecking(false);
            });
          } else setErrorMessage("User doesn't exist");
        });
    } catch (error) {
      //setChecking(false);
    }
    setChecking(false);
  };
  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo size="3rem"></Logo>
          <Subtitle>Shopping has never been easier before</Subtitle>
          <FormControl>
            <InputLabel>
              <Icon src={User} alt="user"></Icon>
              <Label>Username</Label>
            </InputLabel>
            <Input
              type="text"
              name="username"
              placeholder="Type your name"
              autoFocus
              ref={register({
                required: { value: true, message: "This field is required" },
              })}
              onChange={() => setErrorMessage("")}
            ></Input>
            <div style={{ textAlign: "left" }}>
              {errors.username && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
              )}
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </div>
          </FormControl>
          <FormControl>
            <InputLabel>
              <Icon src={Lock} alt="lock"></Icon>
              <Label>Password</Label>
            </InputLabel>
            <Input
              type="password"
              name="password"
              onChange={() => setPasswordError("")}
              placeholder="Type your password"
              ref={register({
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Password has at least 8 characters and consists of at least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
            ></Input>
            <div style={{ textAlign: "left" }}>
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            </div>
          </FormControl>
          <FormControl style={{ marginTop: "20px" }}>
            <Button
              type="submit"
              disabled={checking}
              style={checking ? { backgroundColor: "#cecece" } : null}
            >
              Shop now
            </Button>
          </FormControl>
          <SmallText>
            Don't have an account yet?{" "}
            <Link href="/register">Register now</Link>
          </SmallText>
        </Form>
        <hr style={{ border: "1px solid #cecece", width: "100%" }}></hr>
        <Button
          onClick={handleSignInWithGoogle}
          style={{ margin: "10px 0" }}
          color={SECONDARY_COLOR}
        >
          <IconButton>
            <Icon src={GoogleIcon} style={{ marginRight: "5px" }}></Icon>
            Sign in with Google
          </IconButton>
        </Button>
        <Button onClick={handleSignInWithGithub} color={"#333"}>
          <IconButton>
            <Icon src={GithubIcon} style={{ marginRight: "5px" }}></Icon>
            Sign in with Github
          </IconButton>
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
