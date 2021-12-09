import React from "react";
import {ShopContainer, ShopContent, ItemStore, Item, ShopButtonContainer, ItemImage, GoldContainer, GoldIcon, GoldDisplay, GoldInnerContainer} from "./ShopStylings";
import {TextBox, PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation"
let coin = "/assets/shop_items/coin.png"
let redCoin = "/assets/shop_items/red_coin.png"

class ShopScreen extends React.Component{


    constructor(props) {
        //TODO: get list of item names, gold amounts, and gold owned.
        super(props);

        this.prefix = "/assets/shop_items/";

        this.requestItemsOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

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
          backgroundColor: [
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
              "transparent",
          ],
          costs: [
              5, 10, 15, 5, 10, 15,
              25, 25, 25, 25, 25, 25, 25, 25
          ],
          goldOwned: 20
        }    
      }

      componentDidMount() {

      }

      componentDidUpdate() {
          console.log(this.state.backgroundColor);
          console.log(this.state.selectedItem);
      }

      selectItem(index){

        let bg = [
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent",
            "transparent"
        ];
        if (this.state.selectedItem != index){
            bg[index] = "#00000099";
        } else {
            bg[index] = "transparent";
        }

        this.setState(prevState => ({
            selectedItem: prevState.selectedItem == index ? -1 : index,
            backgroundColor: bg
        }))

        this.forceUpdate();
      }

      buyItem() {
          console.log("buying item");
          //TODO: 
      }

      render() {
        const selectedIndex = this.state.selectedItem;
        const disabled = this.state.selectedItem == -1 || this.state.goldOwned < this.state.costs[selectedIndex];
        console.log(disabled);
        const showCost = this.state.selectedItem != -1;

        const renderGoldCost = () => {
            if (showCost) {
                return (
                    <GoldInnerContainer>
                        <GoldDisplay>Cost: </GoldDisplay>
                        <GoldIcon src={redCoin}></GoldIcon>
                        <GoldDisplay style={{color: "red"}}>-{this.state.costs[this.state.selectedItem]}</GoldDisplay>
                    </GoldInnerContainer>
                );
            } else {
                return (null);
            }
        }

          return (

              <ShopContainer>
                  <ShopContent>
                        <TextBoxWithAnimation stringToType={"Welcome traveler, may I interest you in any of my wares?"} />
                        <ItemStore>
                            {this.state.itemNames.map((item, index) => (   
                                <Item style={{
                                    backgroundColor: `${this.state.backgroundColor[index]}`
                                }}>
                                    <ItemImage src={`${this.prefix}` + `${item}`} onClick={this.selectItem.bind(this, index)}></ItemImage>
                                </Item>
                            ))}
                        </ItemStore>
                        <GoldContainer>
                            {renderGoldCost()}
                            <GoldInnerContainer
                                style={!showCost ? {marginLeft: "auto"} : {}}
                            >
                                <GoldIcon src={coin}></GoldIcon>
                                <GoldDisplay
                                    style = {showCost && disabled ? {color: "red"} : {}}
                                >{this.state.goldOwned}</GoldDisplay>
                            </GoldInnerContainer>
                        </GoldContainer>
                        <ShopButtonContainer>
                            <PixelButton>
                                <p>Back</p>
                            </PixelButton>
                            <PixelButton style={disabled ? {pointerEvents: "none", opacity: "0.4"} : {}}
                                onClick={this.buyItem}
                            >
                                <p>Buy</p>
                            </PixelButton>
                        </ShopButtonContainer>
                  </ShopContent>
              </ShopContainer>
          )
      }
}

export default ShopScreen;