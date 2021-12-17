import React, { useState, useEffect, useRef } from "react";
import { PixelButton } from "../GlobalStylings";
import {ItemBagContainer, ItemBagContent, ItemButtonContainer} from "./ItemBagStylings"
import { ItemDisplay } from "../ShopScreen/ShopScreen";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import { ItemStore } from "../ShopScreen/ShopStylings";

function DialogueSays(props) {
    if (props.dialogueSays === undefined){
        return(
            <TextBoxWithAnimation stringToType="Select an item."/>
        );
    } else {
        return(
            <TextBoxWithAnimation stringToType={props.dialogueSays}/>
        );
    }
}


function ItemBagScreen ({usedItems, callback}) {

    //1) get tokens, header
    //2) send request to get users items
    //3) remove usedItems
    //4) iterate, display

    //stateless variables
    const prefix = "/assets/shop_items/";
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
        }
    };

    //stateful variables
    const [hasStash, setHasStash] = useState(true);
    const [hasAccess, setHasAccess] = useState(true);
    const [items, setItems] = useState([]);
    const [UIState, setUIState] = useState({
        selectedItem: -1,
        disabled: true,
        dialogue: "Select an item."
    });

    //onComponentDidMount
    useEffect(() => {
        console.log(`on init, used items:`)
        usedItems.forEach(i => {
            console.log(i);
        })
        async function fetchStash() {
            const response = await fetch('http://localhost:5000/api/itemBag/getStash', requestOptions);
            if (response.status === 401){
                //user unauthorized
                setHasAccess(false);
            } else if (response.stats === 204){
                setHasStash(false);
            } else {
                const json = await response.json();
                setItems(json);
            }            
        }

        /* FOR DEBUGGING ONLY, TODO: REMOVE ONCE JWT TOKEN PROPERLY SET */
        // async function getJWT() {
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ 
        //           "Email" : "a@c.com",
        //           "Password" : "Password1!"
        //           })
        //     };
        //     fetch('http://localhost:5000/api/authentication/login', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         sessionStorage.setItem('jwtToken', data.token);
        //     })
        //     .catch(error => {
        //         console.log("error: " + error);
        //     });
        // }
        //getJWT();
        fetchStash();

         let newState =  {...UIState};
         newState.dialogue = "Select an item.";
         setUIState(newState);
    }, [])

    //functions
    const selectItem = (index) => {
        let newState = {...UIState};

        if (newState.selectedItem == index){
            newState.selectedItem = -1;
            newState.disabled = true;
            newState.dialogue = "Select an item.";
        } else {
            newState.selectedItem = index;
            newState.disabled = false;
            newState.dialogue = `${items[index].name}: ${items[index].description}.`;
        }
        setUIState(newState);
    }

    useEffect(() => {
        if (usedItems.length == items.length && items.length > 0){
            setNoStash();
        }
    }, [items])

    const setNoStash = () => {
        setHasStash(false);
    }

    useEffect(() => {
        if (!hasAccess){
            sayWhoAreYou();
        }
    }, [hasAccess])

    useEffect(() => {
        if (!hasStash){
            sayEmptyStash();
        }
    }, [hasStash])

    // useEffect(() => {
    //     var newItems = {items}
    //     usedItems.forEach(u => {
    //         newItems
    //     });
    // }, [items])

    const sayEmptyStash = () => {
        let newState = {...UIState};
        newState.selectedItem = -1;
        newState.disabled = true;
        newState.dialogue = "It looks like you have no items in your stash.";
        setUIState(newState);
    }


    const sayWhoAreYou = () => {
        let newState = {...UIState};
        newState.selectedItem = -1;
        newState.disabled = true;
        newState.dialogue = "You seem a little lost. Maybe check in with The Narrator?";
        setUIState(newState);
    }

    const consumeItem = () => {
        console.log(`using item ${items[UIState.selectedItem].name}`);
        usedItems.push(UIState.selectedItem);
        console.log(`used items:`);
        usedItems.forEach(i => {
            console.log(i);
        });
        callback(usedItems);            
    }



    //rendering
    if (hasAccess && hasStash){
        return (
            <ItemBagContainer>
                <ItemBagContent>
                    <DialogueSays key={UIState.dialogue} dialogueSays={`${UIState.dialogue}`} />

                    <ItemStore>
                        {items.map((item, index) => {
                            return usedItems.indexOf(index) === -1 ?
                                <ItemDisplay key={index} onChildClick={() => selectItem(index)} imgSrc={`${prefix}` + `${item.iconUrl}`} selected={index == UIState.selectedItem}/>
                            :
                                <></>
                            })
                        }
                    </ItemStore>
                    <ItemButtonContainer>
                        <PixelButton onClick={() => callback(usedItems)}><p>Back</p></PixelButton>
                        <PixelButton style={UIState.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} onClick={() => consumeItem()}><p>Use</p></PixelButton>
                    </ItemButtonContainer>
                </ItemBagContent>
            </ItemBagContainer>
        );
    } else {
        return(
            <ItemBagContainer>
                <ItemBagContent>
                    <DialogueSays key={UIState.dialogue} dialogueSays={`${UIState.dialogue}`} />
                    <PixelButton onClick={() => callback(usedItems)}><p>Back</p></PixelButton>
                </ItemBagContent>
            </ItemBagContainer>
        );
    }
    
}

export default ItemBagScreen;