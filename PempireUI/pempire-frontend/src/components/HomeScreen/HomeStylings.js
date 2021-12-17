import styled from "styled-components";
let blueBg = "/assets/blue_background.png"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${blueBg}) no-repeat center center fixed;
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
  -ms-interpolation-mode: nearest-neighbor;   
  /* IE (non-standard property) */

`
export const CustomButton = styled.button`
  transform: translateY(-540%);
  font-family: 'ArcadeClassic', serif ;
  color: white;
  font-size: 50px;
  //margin-bottom: 7%;
  //margin-top: -3%;
  width: 20%;
  background: transparent;
  border-radius: 10px;
`
