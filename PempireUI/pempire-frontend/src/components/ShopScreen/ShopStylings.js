import styled from "styled-components";
import b from "../../assets/shop_background_pepe.png"
import { TextBox } from "../GlobalStylings";

export const ShopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b});
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`

export const ShopContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px;

    ${TextBox} {
        font-size: 12px;
    }
`
