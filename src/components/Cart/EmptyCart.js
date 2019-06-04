//EmptyCart کامپوننت

import React, { Component } from "react";
import styled from "styled-components";
export default class EmptyCart extends Component {
  render() {
    return (
      <EmptyCartWrapper>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-10 mx-auto text-center text-title"
          >
            <h1>سبد خرید شما خالیست</h1>
          </div>
        </div>
      </div>
      </EmptyCartWrapper>
    );
  }
}

const EmptyCartWrapper = styled.div`
  font-family: "IRANSansMobile";
`;
