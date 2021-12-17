import styled from "styled-components";

import { CombatContainer } from "../CombatScreen/CombatStylings";
import { PixelButton } from "../GlobalStylings";
import { ItemDisplay } from "../ShopScreen/ShopScreen";
import { TextBox } from "../GlobalStylings";

let b = "/assets/blue_background.png";

export const ItemBagContent = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    margin: 5% 30%;
    gap: 10%;

    ${PixelButton} {
        align-self: center;
    }

    ${TextBox} {
        font-size: 1.3vw;
        align-self: stretch;
        height: 15%;
    }

`

export const ItemBagContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${b});
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  image-rendering: optimizeSpeed;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`

export const ItemButtonContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 10%;
    justify-content: center;

`