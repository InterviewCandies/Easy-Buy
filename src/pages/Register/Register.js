import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Lock from "../../asset/img/lock.svg";
import User from "../../asset/img/user2.svg";
import EmailIcon from "../../asset/img/email.svg";
import ConfirmIcon from "../../asset/img/confirm.svg";
import { withRouter } from "react-router-dom";
import { PRIMARY_COLOR } from "../../common";

const Container = styled.div`
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
function Register(props) {
  return (
    <Container>
      <Box>
        <Logo size="3rem"></Logo>
        <Subtitle>Join and buy things at your fingertip</Subtitle>
        <FormControl>
          <InputLabel>
            <Icon src={User} alt="user"></Icon>
            <Label>Username</Label>
          </InputLabel>
          <Input type="text" placeholder="Type your name" autoFocus></Input>
        </FormControl>
        <FormControl>
          <InputLabel>
            <Icon src={EmailIcon} alt="user"></Icon>
            <Label>Email</Label>
          </InputLabel>
          <Input type="text" placeholder="Type your name" autoFocus></Input>
        </FormControl>
        <FormControl>
          <InputLabel>
            <Icon src={Lock} alt="lock"></Icon>
            <Label>Password</Label>
          </InputLabel>
          <Input type="text" placeholder="Type your password"></Input>
        </FormControl>
        <FormControl>
          <InputLabel>
            <Icon src={ConfirmIcon} alt="lock"></Icon>
            <Label>Confirm password</Label>
          </InputLabel>
          <Input type="text" placeholder="Type your password"></Input>
        </FormControl>
        <FormControl style={{ marginTop: "20px" }}>
          <Button
            handleClick={() => {
              props.history.push("/all");
            }}
          >
            Sign up
          </Button>
        </FormControl>
        <SmallText>
          Have an account? <Link href="/">Login now</Link>
        </SmallText>
      </Box>
    </Container>
  );
}

export default withRouter(Register);
