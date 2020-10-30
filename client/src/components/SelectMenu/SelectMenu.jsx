import React from "react";
import styled from 'styled-components';
import {Button} from "../Button/Button";

const StyledMenu = styled.div`
  height: 100px;
  background-color: #777;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SelectMenu = () => (
    <StyledMenu>
        <Button uppercase bold hover={{bgcolor: "yellow", textColor: "black"}}>Today</Button>
        <Button uppercase bold hover={{bgcolor: "yellow", textColor: "purple"}}>Week</Button>
        <Button uppercase bold hover={{bgcolor: "black", textColor: "pink"}}>2 Weeks</Button>
    </StyledMenu>
);
