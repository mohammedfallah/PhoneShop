import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <div className="container">
          <input placeholder="نام کاربری" />
          <br />
          <input placeholder="رمز عبور " />

          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-user"> ورود </i>
            </span>
          </ButtonContainer>
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-key"> فراموشی رمز عبور </i>
            </span>
          </ButtonContainer>
        </div>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
  text-transform: capitalize;
  justify-content: "center";
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  font-family: "IRANSansMobile";
`;
