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
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    gap: 10px;
    background-color: #5b2e29c2;
    border: Cornsilk 2px solid;
    outline: #5b2e29 3px solid;
`

export const Item = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background-color: transparent;
    background-image: ${(props) => `url(${require(`../../assets/shop_items/${props.image}`).default})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 32px;
    min-height: 32px;
    max-width: auto;
    max-height: auto;
    image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`
