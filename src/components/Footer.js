import React, { Component } from "react";
import styled from 'styled-components'
export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>
          <h4>Created By M.H.Fallah @2019 mohammedfalla838@gmail.com</h4>
          <hr />
        </div>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.div`
  justify-content: "right";
`;
