import React from "react";
import {ShopContainer, ShopContent, ItemStore, Item, ShopButtonContainer, ItemImage} from "./ShopStylings";
import {TextBox, PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"
import * as fs from "fs"

class ShopScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          itemNames: [
              "mana_small.png",
              "mana_medium.png",
              "mana_large.png",
              "health_small.png",
              "health_medium.png",
              "health_large.png",
              "scroll_acid.png",
              "scroll_earth.png",
              "scroll_electricity.png",
              "scroll_fire.png",
              "scroll_grass.png",
              "scroll_metal.png",
              "scroll_oil.png",
              "scroll_water.png"
          ],
          selectedItem: -1,
        }    
      }

      selectItem(index){
        this.setState(prevState => ({
            selectedItem: prevState.selectItem == index ? -1 : index
        }))
        console.log(index);
      }

      render() {
          return (
              <ShopContainer>
                  <ShopContent>
                        <TextBoxWithAnimation stringToType={"Welcome traveler, may I interest you in any of my wares?"} />
                        <ItemStore>
                            {this.state.itemNames.map((item, index) => (
                                <Item>
                                    <ItemImage src={`${require(`../../assets/shop_items/${item}`).default}`} onClick={this.selectItem.bind(this, index)}></ItemImage>
                                </Item>
                            ))}
                        </ItemStore>
                        <ShopButtonContainer>
                            <PixelButton>
                                <p>Back</p>
                            </PixelButton>
                            <PixelButton>
                                <p>Buy</p>
                            </PixelButton>
                        </ShopButtonContainer>
                  </ShopContent>
              </ShopContainer>
          )
      }
}

export default ShopScreen;