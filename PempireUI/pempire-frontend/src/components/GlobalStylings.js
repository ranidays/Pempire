import styled from "styled-components";
import b from "../assets/blue_background.png"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */ 
  /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
`

export const TitleImg = styled.img`
  width: 47%;
  height: auto;
  display: flex;
  padding-top: 15%;
`


export const BookWithHand = styled.img`
  width: 47%;
  height: auto;
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
  position: fixed; 
  bottom: 0px; 
  right: 0px;
  margin-right: 9%;
`

export const Narrator = styled.img`
  width: 40%;
  height: auto;
  position: fixed; 
  bottom: 0px; 
  left: 0px;

  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
  -ms-interpolation-mode: nearest-neighbor;
 

  
  
  
`
