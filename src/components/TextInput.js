import React, { Component } from "react";
import styled from 'styled-components' ;
export default class TextInput extends Component {
  render() {
    return (
      <TextInputWrapper>
      <div>
        <input type="text"  />
      </div>
      </TextInputWrapper>
    );
  }
}


const TextInputWrapper = styled.div`

  width: 85%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  border-bottom: 1px solid #445366;
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  margin-top: 10px;
`