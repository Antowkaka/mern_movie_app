import React, {useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {BodySkeleton} from "../../components/BodyContainer/BodyContainer";

const StyledRegForm = styled.form`
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


export const Registration = () => {
    const { register, handleSubmit, watch, errors } = useForm()
    const {loading, error, request, clearError} = useHttp()
    const [reqError, setReqError] = useState('')

    const onSubmit = async (body) => {
        try {
            const data = await request('/api/auth/registration', 'POST', body)
            console.log(data)
        } catch (e) {
            console.log('Error submit', e)
        }
    }

    return (
        <BodySkeleton>
            <StyledRegForm onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign in</h2>
                <input type="text" placeholder="Email" name="userEmail" ref={register({required: true})}/>
                {errors.userEmail && <span>This is required</span>}
                <input type="password" placeholder="Password" name="userPass" ref={register}/>
                <input type="submit" value="Sign in" disabled={loading}/>
                {reqError && <span>{reqError}</span>}
            </StyledRegForm>
        </BodySkeleton>
    )
}
