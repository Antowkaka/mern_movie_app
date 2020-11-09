import React from "react";
import styled from "styled-components";
import {BodySkeleton} from "../../components/BodyContainer/BodyContainer";
import {useHttp} from "../../hooks/http.hook";
import {useForm} from "react-hook-form";

const StyledLogForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #777;
  border-radius: 20px;
  
  h2 {
    color: antiquewhite;
  }
  
  span {
    color: antiquewhite;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  input {
    margin: 10px 0;
    height: 30px;
    
    &[type="submit"] {
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
    const {register, handleSubmit, watch, errors} = useForm()
    const {loading, request, error, clearError} = useHttp()

    const loginOnSubmit = async (body) => {
        try {
            const data = await request('/api/auth/login', 'POST', body)
            console.log('Response: ', data)
        } catch (e) {
            console.log('Error submit', e.response)
        }
    }

    return (
        <BodySkeleton>
            <StyledLogForm onSubmit={handleSubmit(loginOnSubmit)}>
                <h2>Log in</h2>
                <input type="text" name="userEmail" placeholder="Email" ref={register({required: true})}/>
                {errors.userEmail && <span>This is required</span>}
                <input type="password" name="userPass" placeholder="Password" ref={register({required: true})}/>
                {errors.userPass && <span>This is required</span>}
                <input type="submit" value="Log in"/>
            </StyledLogForm>
        </BodySkeleton>
    )
}