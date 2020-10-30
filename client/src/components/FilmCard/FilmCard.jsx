import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 180px;
  height: 300px;
  background-color: aquamarine;
  border-radius: 20px;
`



export const FilmCard = (props) => {
    const { filmName, filmDate } = props;


    return (
        <StyledCard>
            <h2>{filmName}</h2>
            <p>{filmDate}</p>
        </StyledCard>
    )
}