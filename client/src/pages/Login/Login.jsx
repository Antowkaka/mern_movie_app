import React from "react";
import styled from "styled-components";
import {BodySkeleton} from "../../components/BodyContainer/BodyContainer";

const StyledLogForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #777;
  border-radius: 20px;
  
  input {
    margin: 10px 0;
    height: 30px;
    
    &:last-child {
      text-transform:uppercase;
      color: antiquewhite;
      background-color: #9f4456;
      border: none;
      border-radius: 20px;
      width: 169px;
      
      &:hover {
        color: #9f4456;
        background-color: antiquewhite;
      }
    }
  }
`


export const Login = () => {
    return (
        <BodySkeleton>
            <StyledLogForm>
                <h2>Log in</h2>
                <input type="email"/>
                <input type="password"/>
                <input type="button" value="Log in"/>
            </StyledLogForm>
        </BodySkeleton>
    )
}