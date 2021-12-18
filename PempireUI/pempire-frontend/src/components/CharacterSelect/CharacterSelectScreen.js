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

function SheetContent(props) {

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
    const [heroes, setHeroes] = useState([]); //empty list of objects to hold items
    const [UIState, setUIState] = useState({
        selectedItem: -1,
        disabled: true,
        dialogue: "It is time for you to choose your hero."
    })
    const [hasAccess, setHasAccess] = useState(true);

    //componentDidMount
    useEffect(() => {
        async function fetchHeroes() {
            const response = await fetch('http://localhost:5000/api/characterselect/getheroes', requestOptions);
            if (response.status === 401){
                //user unauthorized
                setHasAccess(false);
            } else {
                const json = await response.json();
                setHeroes(json);
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
        // getJWT();

         fetchHeroes();       
         let newState =  {...UIState};
         newState.dialogue = "It is time for you to choose your hero.";
         setUIState(newState);
        //fetchItemKeys();
    }, [])

    //componentDidUpdate
    useEffect(() => {
        //console.log("component did update")
    })

    const selectHero = () => {
        console.log(`selected hero ${heroes[UIState.selectedItem].name}`);
        const buyRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
            },
            body: JSON.stringify({
                "heroSelected": UIState.selectedItem
            })
        };
        //console.log(buyRequestOptions.body);
        fetch("http://localhost:5000/api/characterselect/selecthero", buyRequestOptions)
        .then(response => {
            navigate("/boss")
        })
        .catch(err => console.log(err));
    }

    const viewHero = (index) => {
        console.log(`viewing hero ${heroes[index].name}`);
        var newState = {...UIState};
        if (newState.selectedItem == index){
            newState.selectedItem = -1;
            newState.disabled = true;
            newState.dialogue = "It is time for you to choose your hero.";
        } else {
            newState.selectedItem = index;
            newState.disabled = false;
            newState.dialogue = "A fine choice. Are you sure about your selection?";
        }
        setUIState(newState);
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
                    <HeroContainer>
                        {heroes.map((hero, index) => (
                            <HeroDisplay key={index} onChildClick={() => viewHero(index)} imgSrc={`${prefix}` + `${hero.portrait}`} selected={index == UIState.selectedItem}/>
                        ))
                        }
                    </HeroContainer>
                    <CharacterSheet>

                        <Header style={UIState.disabled ? { visibility: "hidden"} : {}}>{UIState.disabled ? "Filler" : heroes[UIState.selectedItem].name}</Header>
                        <Description style={UIState.disabled ? { visibility: "hidden"} : {}}>{UIState.disabled ? "I am filler filler filler filler filler yes i am" : heroes[UIState.selectedItem].description}</Description> 
                        <PixelButton style={UIState.disabled ? { pointerEvents: "none", opacity: "0.4" } : {}} onClick={() => selectHero()}><p>Select</p></PixelButton>                     
                    </CharacterSheet>
                </RightContainer>
            </MainContainer>
        );
    } else {
        return(
            <MainContainer>
                <LeftContainer>
                    <DialogueSays dialogueSays={"I haven't seen you before, let's place your name in the book first."}/>
                    <Narrator src={narrImg}/>
                </LeftContainer>
                <RightContainer>
                </RightContainer>
            </MainContainer>
        );
    }
    
}

export default CharacterSelectScreen;
