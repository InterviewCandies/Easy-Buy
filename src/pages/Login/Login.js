import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo/Logo";
import Lock from "../../asset/img/lock.svg";
import User from "../../asset/img/user2.svg";
import { useHistory } from "react-router-dom";
import { PRIMARY_COLOR } from "../../common";
const Container = styled.form`
  background-color: #f0f0f3;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
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
  background-color: #0f56b3;
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
function Login() {
  const { handleSubmit, errors, register } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    history.push("/all");
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Box>
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
          ></Input>
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>
            <Icon src={Lock} alt="lock"></Icon>
            <Label>Password</Label>
          </InputLabel>
          <Input
            type="password"
            name="password"
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
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormControl>
        <FormControl style={{ marginTop: "20px" }}>
          <Button type="submit">Shop now</Button>
        </FormControl>
        <SmallText>
          Don't have an account yet? <Link href="/register">Register now</Link>
        </SmallText>
      </Box>
    </Container>
  );
}

export default Login;
