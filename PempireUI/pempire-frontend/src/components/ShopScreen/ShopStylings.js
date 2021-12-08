import styled from "styled-components";
import React from "react"
import b from "../../assets/shop_background_pepe.png"
import { TextBox } from "../GlobalStylings";
import healthSmall from "../../assets/shop_items/health_small.png"
import healthMedium from "../../assets/shop_items/health_medium.png"
import healthLarge from "../../assets/shop_items/health_large.png"
import manaSmall from "../../assets/shop_items/mana_small.png"
import manaLarge from "../../assets/shop_items/mana_large.png"
import manaMedium from "../../assets/shop_items/mana_medium.png"

const itemSize = "6vw";

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
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    gap: 10px;
    ${TextBox} {
        font-size: 12px;
    }
`

export const ItemStore = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, ${itemSize});
    grid-template-rows: repeat(auto-fill, ${itemSize});
    justify-items: center;
    justify-content: center;
    grid-gap: 10px;
    background-color: #5b2e29c2;
    border: Cornsilk 2px solid;
    outline: #5b2e29 5px solid;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    padding: 10px;
`

export const Item = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    background-image: ${(props) => `url(${require(`../../assets/shop_items/${props.image}`).default})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    image-rendering: crisp-edges;
    min-height: ${itemSize};
    min-width: ${itemSize};
    image-rendering: -moz-crisp-edges;          /* Firefox */
    image-rendering: -o-crisp-edges;            /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    aspect-ratio: 1;
`

export const ShopButtonContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`
