import React from "react";
import styled from "styled-components";

require('dotenv').config()

const StyledCard = styled.div`
  width: 160px;
  height: 330px;
  padding: 10px;
  background-color: #777;
  border-radius: 20px;
  perspective: 1000px;
  
  &:hover .flipper,
  &.hover .flipper {
    transform: rotateY(180deg);
  }
  
  .front_content, .back_content {
    width: 160px;
    height: 330px;
  }
  
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  
  .front_content, .back_content {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .front_content {
    z-index: 2;
  }
  
  .back_content {
    transform: rotateY(180deg);
  }
  
  img {
    width: 160px;
    height: 250px;
    border-radius: 20px;
  }
  
  .film_meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
      font-size: 12px;
      font-weight: bold;
      text-align: center;
    }
    
    p {
      margin-top: 0;
    }
  }
`

export const FilmCard = (props) => {
    const { filmName, filmDate, filmImgUrl, filmOverview } = props;
    const { REACT_APP_MOVIES_IMG_URL } = process.env

    return (
        <StyledCard>
            <div className="flipper">
                <div className="front_content">
                    <img src={'//image.tmdb.org/t/p/w220_and_h330_face'.concat(filmImgUrl)} />
                    <div className="film_meta">
                        <h2>{filmName}</h2>
                        <p>{filmDate}</p>
                    </div>
                </div>
                <div className="back_content">
                    <p>{filmOverview}</p>
                </div>
            </div>
        </StyledCard>
    )
}