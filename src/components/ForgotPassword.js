import React, { Component } from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import TextInput from './TextInput' ;


export default class ForgotPassword extends Component {
  render() {
    return (
      <ForgotPasswordWrapper>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <TextInput />
              <br />
            </div>
          </div>
          <ButtonContainer>
          <span class="fa-passwd-reset fa-stack">
            <i class="fa fa-undo fa-stack-2x"></i>
            <i class="fa fa-lock fa-stack-1x"></i>
            </span><label>بازیابی کلمه عبور</label>
          </ButtonContainer>
        </div>
      </ForgotPasswordWrapper>
    );
  }
}

const ForgotPasswordWrapper = styled.div`
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
