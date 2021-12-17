import React, { useState, useEffect, useRef } from "react";
import {ShopContainer, ShopContent, ItemStore, Item, ShopButtonContainer, ItemImage, GoldContainer, GoldIcon, GoldDisplay, GoldInnerContainer} from "./ShopStylings";
import {PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {useNavigate} from "react-router-dom";
let coin = "/assets/shop_items/coin.png"
let redCoin = "/assets/shop_items/red_coin.png"

function GoldInfo(props){
    if (!props.showCost){
        return(
            <GoldContainer>
                <GoldInnerContainer style={{ marginLeft: "auto" }}>
                    <GoldIcon src={coin}></GoldIcon>
                    <GoldDisplay>{props.gold}</GoldDisplay>
                </GoldInnerContainer>
            </GoldContainer>
        );
    } else {
        return(
            <GoldContainer>
                <GoldInnerContainer>
                    <GoldDisplay>Cost: </GoldDisplay>
                    <GoldIcon src={redCoin}></GoldIcon>
                    <GoldDisplay style={{ color: "red" }}>-{props.cost}</GoldDisplay>
                </GoldInnerContainer>
                <GoldInnerContainer>
                    <GoldIcon src={coin}></GoldIcon>
                    <GoldDisplay style={props.disabled ? { color: "red" } : {}}>{props.gold}</GoldDisplay>
                </GoldInnerContainer>
            </GoldContainer>
        );
    }
}

function ItemDisplay(props) {
    if (props.selected){
        return(
            <Item selected onClick={props.onChildClick}>
                <ItemImage src={props.imgSrc} ></ItemImage>
            </Item>
        );
    } else {
        return(
            <Item>
                <ItemImage src={props.imgSrc} onClick={props.onChildClick}></ItemImage>
            </Item>
        );
    }
}
export {ItemDisplay};

function ShopkeepSays(props) {
    if (props.shopkeepSays === undefined){
        return(
            <TextBoxWithAnimation stringToType="Welcome traveler, may I interest you in any of my wares?"/>
        );
    } else {
        return(
            <TextBoxWithAnimation stringToType={props.shopkeepSays}/>
        );
    }
}

function ShopScreen(props) {

    //stateless variables
    const prefix = "/assets/shop_items/";
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
        }
    };
    const navigate = useNavigate();

    //stateful variables
    const [items, setItems] = useState([]); //empty list of objects to hold items
    const [gold, setGold] = useState(0);
    //const [itemKeys, setItemKeys] = useState([]);
    const [UIState, setUIState] = useState({
        selectedItem: -1,
        disabled: true,
        showCost: false,
        shopkeepSays: "Welcome traveler, may I interest you in any of my wares?"
    })
    const [hasAccess, setHasAccess] = useState(true);

    //componentDidMount
    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:5000/api/shop/getitems', requestOptions);
            if (response.status === 401){
                //user unauthorized
                setHasAccess(false);
            } else {
                const json = await response.json();
                setItems(json);
            }            
        }
        async function fetchGold() {
            const response = await fetch('http://localhost:5000/api/shop/getusergold', requestOptions);
            if (response.status === 401){
                //user unauthorized
                setHasAccess(false);
            } else {
                const json = await response.json();
                setGold(json);
            }

        }
        // async function fetchItemKeys() {
        //     const response = await fetch('http://localhost:5000/api/shop/getitemkeys', requestOptions);
        //     const json = await response.json();
        //     setItemKeys(json);

        // }
        /* FOR DEBUGGING ONLY, TODO: REMOVE ONCE JWT TOKEN PROPERLY SET */
        async function getJWT() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                  "Email" : "a@c.com",
                  "Password" : "Password1!"
                  })
            };
            fetch('http://localhost:5000/api/authentication/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('jwtToken', data.token);
            })
            .catch(error => {
                console.log("error: " + error);
            });
        }
        getJWT();
        fetchItems();
        fetchGold();        
        let newState =  {...UIState};
        newState.shopkeepSays = "Welcome traveler, may I interest you in any of my wares?";
        setUIState(newState);
        //fetchItemKeys();
    }, [])

    //componentDidUpdate
    useEffect(() => {
        //console.log("component did update")
    })


    //methods
    const selectItem = (index) => {
        let newState = {...UIState};

        if (newState.selectedItem == index){
            newState.selectedItem = -1;
            newState.disabled = true;
            newState.showCost = false;
            newState.shopkeepSays = "Anything catch your fancy, dear travler?";
        } else {
            newState.selectedItem = index;
            newState.disabled = items[index].goldCost > gold;
            newState.showCost = true;
            newState.shopkeepSays = `Ahh yes, the ${items[index].name}. ${items[index].description}.`;
        }
        setUIState(newState);
    }

    //reset ui state when item is bought
    const sayThanks = () => {
        let newState = {...UIState};
        newState.selectedItem = -1;
        newState.disabled = true;
        newState.showCost = false;
        newState.shopkeepSays = "My gratitude. Anything else I can get for you?";
        setUIState(newState);
    }

    useEffect(() => {
        if (!hasAccess){
            sayWhoAreYou();
        }
    }, [hasAccess])

    const sayWhoAreYou = () => {
        let newState = {...UIState};
        newState.selectedItem = -1;
        newState.disabled = true;
        newState.showCost = false;
        newState.shopkeepSays = "I'm not sure you who are, but you definitely do not belong here. Check in with The Narrator first.";
        setUIState(newState);
    }

    const buyItem = () => {
        console.log("buying item");
        //TODO: 
        //send post request with cost and item to add

        const buyRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
            },
            body: JSON.stringify({
                "itemtoadd": UIState.selectedItem,
                "cost": parseInt(items[UIState.selectedItem].goldCost)
            })
        };
        //console.log(buyRequestOptions.body);
        fetch("http://localhost:5000/api/shop/updateinventory", buyRequestOptions)
        .then(response => {
            //console.log(response);
            let newGoldAmount = parseInt(gold);
            //console.log(newGoldAmount);
            //console.log("-" + parseInt(items[UIState.selectedItem].goldCost));
            newGoldAmount -= parseInt(items[UIState.selectedItem].goldCost);
            setGold(newGoldAmount);
        }).then(r => {
            sayThanks();
        })
        .catch(err => console.log(err));
    }


    if (hasAccess){
        return (
            <ShopContainer>
                <ShopContent>
                    <ShopkeepSays key={UIState.shopkeepSays} shopkeepSays={`${UIState.shopkeepSays}`} />
                    <ItemStore>
                        {items.map((item, index) => (
                            <ItemDisplay key={index} onChildClick={() => selectItem(index)} imgSrc={`${prefix}` + `${item.iconUrl}`} selected={index == UIState.selectedItem}/>
                        ))
                        }
                    </ItemStore>
                    <GoldInfo gold={gold} disabled={UIState.disabled} showCost={UIState.showCost} cost={UIState.selectedItem == -1 ? 0 : items[UIState.selectedItem].goldCost}/>
                    <ShopButtonContainer>
                        <PixelButton onClick={() => navigate(-1)}>
                            <p>Back</p>
                        </PixelButton>
                        <PixelButton style={UIState.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} onClick={() => buyItem()}>
                            <p>Buy</p>
                        </PixelButton>
                    </ShopButtonContainer>
                </ShopContent>
            </ShopContainer>
        );
    } else {
        return(
            <ShopContainer>
                <ShopContent>
                    <ShopkeepSays key={UIState.shopkeepSays} shopkeepSays={`${UIState.shopkeepSays}`} />
                </ShopContent>
            </ShopContainer>
        );
        
    }
}

export default ShopScreen;