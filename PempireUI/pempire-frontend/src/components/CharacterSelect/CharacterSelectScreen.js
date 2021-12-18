import React, { useState, useEffect } from "react";
import {PixelButton} from "../GlobalStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {useNavigate} from "react-router-dom";
import { MainContainer, LeftContainer, RightContainer, CharacterSheet, HeroContainer, Narrator, Header, Description, HeroImage } from "./CharacterSelectStylings";


const prefix = "/assets/heroes/";
const narrImg = "/assets/narrator.png";

function HeroDisplay(props) {
    if (props.selected){
        return(
            <HeroContainer onClick={props.onChildClick}>
                <HeroImage src={`${props.imgSrc}_highlighted.png`} ></HeroImage>
            </HeroContainer>
        );
    } else {
        return(
            <HeroContainer onClick={props.onChildClick}>
                <HeroImage src={`${props.imgSrc}.png`}></HeroImage>
            </HeroContainer>
        );
    }
}

function DialogueSays(props) {
    if (props.dialogueSays === undefined){
        return(
            <TextBoxWithAnimation stringToType="It is time for you to choose your hero."/>
        );
    } else {
        return(
            <TextBoxWithAnimation stringToType={props.dialogueSays}/>
        );
    }
}

function CharacterSelectScreen(props) {

    //stateless variables
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
        }
    };
    const navigate = useNavigate();

    //stateful variables
    const [heros, setHeros] = useState([]); //empty list of objects to hold items
    const [UIState, setUIState] = useState({
        selectedItem: -1,
        disabled: true,
        dialogue: "It is time for you to choose your hero."
    })
    const [hasAccess, setHasAccess] = useState(true);

    //componentDidMount
    useEffect(() => {
        async function fetchHeroes() {
            const response = await fetch('http://localhost:5000/api/shop/getitems', requestOptions);
            if (response.status === 401){
                //user unauthorized
                setHasAccess(false);
            } else {
                const json = await response.json();
                //setItems(json);
            }            
        }

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
        // getJWT();

        // fetchHeroes();       
        // let newState =  {...UIState};
        // newState.dialogue = "It is time for you to choose your hero.";
        // setUIState(newState);
        //fetchItemKeys();
    }, [])

    //componentDidUpdate
    useEffect(() => {
        //console.log("component did update")
    })

    const selectHero = () => {
        //
    }

    //return
    if (hasAccess){
        return(
            <MainContainer>
                <LeftContainer>
                    <DialogueSays dialogueSays={UIState.dialogue}/>
                    <Narrator src={narrImg}/>
                </LeftContainer>
                <RightContainer>
                    <HeroContainer></HeroContainer>
                    <CharacterSheet>
                        <Header>CharacterName</Header>
                        <Description>char description?</Description> 
                        <PixelButton onClick={() => selectHero()}><p>Select</p></PixelButton>                     
                    </CharacterSheet>
                </RightContainer>
            </MainContainer>
        );
    } else {
        return <> </>
    }
    
}

export default CharacterSelectScreen;
