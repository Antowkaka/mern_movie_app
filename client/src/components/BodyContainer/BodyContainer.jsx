import React from "react";
import styled from "styled-components";


export const BodySkeleton = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 10px;
  
  @media (min-width: 1200px) {
    padding: 50px 30px 0;
  }
  
  @media (max-width: 1200px) {
    max-width: 1140px;
  }
  
  @media (max-width: 992px) {
    max-width: 960px;
  }
  
  @media (max-width: 768px) {
    max-width: 1140px;
  }
  
  @media (max-width: 576px) {
    max-width: 1140px;
  }
  
  @media (max-width: 576px) {
    max-width: 1140px;
  }
`