import React from "react";
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.bgcolor || "white"};
  color: ${props => props.textColor || "#777"};
  text-transform: ${props => props.uppercase && "uppercase"};
  font-weight: ${props => props.bold && "bold"};
  border-radius: 10px;
  border: none;
  padding: 10px;
  height: 50px;
  width: 300px;
  
  &:hover {
    background-color: ${props => props.hover.bgcolor || "#777"};
    color: ${props => props.hover.textColor || "white"};
    transition: background-color .3s;
  }  
`