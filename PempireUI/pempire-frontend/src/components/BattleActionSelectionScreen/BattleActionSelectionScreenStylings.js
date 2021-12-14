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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 50%;
  margin-right: 10%;
`

export const Header = styled.h1`
  color: white;
  font-family: 'PixelFont';
  
`

export const Subheader = styled.h2`
  color: white;
  font-family: 'PixelFont';
`
export const CustomButton = styled.button`
  font-family: 'ArcadeClassic', serif ;
  color: white;
  background: transparent;
  border-radius: 10px;
  z-index: 1;
  width: 100%;
  //align-self: flex-end;
  //margin-bottom: 25px;
  //padding-left: 1%;
  //transform: translateX(12%) translateY(-140%);
  height: 90%;
  font-size: 35px;
  margin: 10px;

`
