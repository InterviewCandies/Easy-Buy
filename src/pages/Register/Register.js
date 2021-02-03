import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo/Logo";
import Lock from "../../asset/img/lock.svg";
import User from "../../asset/img/user2.svg";
import EmailIcon from "../../asset/img/email.svg";
import ConfirmIcon from "../../asset/img/confirm.svg";
import { withRouter } from "react-router-dom";
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
  background-color: #0f56b3;
  width: 100%;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

function Register(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Logo size="3rem"></Logo>
        <Subtitle>Join and buy things at your fingertip</Subtitle>
        <FormControl>
          <InputLabel>
            <Icon src={User} alt="user"></Icon>
            <Label>Username</Label>
          </InputLabel>
          <Input
            type="text"
            name="username"
            placeholder="Type your username"
            autoFocus
            ref={register({
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          ></Input>
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>
            <Icon src={EmailIcon} alt="user"></Icon>
            <Label>Email</Label>
          </InputLabel>
          <Input
            type="text"
            name="email"
            placeholder="Type your name"
            ref={register({
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          ></Input>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
        <FormControl>
          <InputLabel>
            <Icon src={ConfirmIcon} alt="lock"></Icon>
            <Label>Confirm password</Label>
          </InputLabel>
          <Input
            type="password"
            placeholder="Type your password"
            name="confirmedPassword"
            ref={register({
              required: { value: true, message: "This field is required" },
            })}
          ></Input>
          {errors.confirmedPassword && (
            <ErrorMessage>{errors.confirmedPassword.message}</ErrorMessage>
          )}
        </FormControl>
        <FormControl style={{ marginTop: "20px" }}>
          <Button type="submit">Sign up</Button>
        </FormControl>
        <SmallText>
          Have an account? <Link href="/">Login now</Link>
        </SmallText>
      </Box>
    </Container>
  );
}

export default withRouter(Register);
