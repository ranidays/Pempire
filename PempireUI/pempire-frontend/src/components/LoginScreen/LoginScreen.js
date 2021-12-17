import React, {useState} from "react";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {MainContainer, LeftContainer, RightContainer, BookWithHand, Narrator, FormInputFieldContainer, InputField, SaveTab, CustomButton} from "./LoginStylings";
import {Link, Navigate} from "react-router-dom";

let BookHand = "/assets/book_with_hand.png";
let narrator = "/assets/narrator.png";

const LoginScreen = () => {
    const [responseStatus, setResponseStatus] = useState(null);
    const [savedGameResponseStatus, setSavedGameResponseStatus] = useState(null);
    const [gameState, setGameStates] = useState(null);
    const [selectedGameState, setSelectedGameState] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [saveTab1, setSaveTab1] = useState("");
    const [saveTab2, setSaveTab2] = useState("");
    const [saveTab3, setSaveTab3] = useState("");

    const handleClick = (props) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                // "Email" : "a@c.com",
                // "Password" : "Password1!"
                "Email" : email,
                "Password" : password
            })
        };
        fetch('http://localhost:5000/api/authentication/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('jwt', data.token);

                setHasAccess(true);
        });
        fetch('http://localhost:5000/api/authentication/getuserfromtoken', {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')},
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.gameStates);
                setGameStates(data.gameStates);

                if(gameState === null){
                    //All Save tabs say new game
                    setSaveTab1("New Game");
                    setSaveTab2("New Game");
                    setSaveTab3("New Game");
                }
                else if(gameState.length === 1){
                    setSaveTab1("Saved Game 1");
                    setSaveTab2("New Game");
                    setSaveTab3("New Game");
                }
                else if(gameState.length === 2){
                    setSaveTab1("Saved Game 1");
                    setSaveTab2("Saved Game 2");
                    setSaveTab3("New Game");
                }

                else if(gameState.length === 3){
                    setSaveTab1("Saved Game 1");
                    setSaveTab2("Saved Game 2");
                    setSaveTab3("Saved Game 3");
                }
        })
    }

    const handleSaveTabClick = (props) => {
        if(props === "New Game"){

            fetch("http://localhost:5000/api/authentication/newgamestate/", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    //TODO: MAKE ALL GAMESTATE VALUES NULL
                    // body:
                }
            ).then(response => setResponseStatus(response.status))

        }
        else if(props === "Saved Game 1"){
            //Post gameState[0] to http://localhost:5000/api/authentication/activegamestate
            setSelectedGameState(0)
        }
        else if(props === "Saved Game 2"){
            setSelectedGameState(1)

        }else if(props === "Saved Game 3"){
            setSelectedGameState(2)

        }

        //Post the active game state
        fetch(`http://localhost:5000/api/authentication/activegamestate/${gameState[selectedGameState]}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        }).then(response => setSavedGameResponseStatus(response.status))
    }

    if(responseStatus === 200){
        return <Navigate to='/Story'  />;
    }

    if(savedGameResponseStatus === 200) {
        //TODO: Needs to return to Boss Select Screen
        return <Navigate to='/Story'  />;
    }

    if(!hasAccess){
        return(
            <MainContainer>
                <LeftContainer>
                    <TextBoxWithAnimation stringToType={"Time to login. The adventure awaits."} />
                    <Narrator src={narrator}/>
                </LeftContainer>

                <RightContainer>
                    <BookWithHand src={BookHand}/>
                    <FormInputFieldContainer>
                        <InputField onChange={e => setEmail(e.target.value)} type="text" placeholder="Email Address"/>
                        <InputField onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    </FormInputFieldContainer>
                    <CustomButton onClick={() => handleClick(email, password)}>
                        {/*<Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Shop">Login</Link>*/}
                        Login
                    </CustomButton>
                </RightContainer>

            </MainContainer>
        )
    }
    else{
        return(
            <MainContainer>
                <LeftContainer>
                    <TextBoxWithAnimation stringToType={"Time to choose. Would you like to start a new game, or a saved game?"} />
                    <Narrator src={narrator}/>
                </LeftContainer>

                <RightContainer>
                    <BookWithHand src={BookHand}/>

                </RightContainer>

                <SaveTab onClick={() => handleSaveTabClick(saveTab1)} style={{transform: 'translateX(460%) translateY(10%)'}}>{saveTab1}</SaveTab>
                <SaveTab onClick={() => handleSaveTabClick(saveTab2)} style={{transform: 'translateX(460%) translateY(400%)'}}>{saveTab2}</SaveTab>
                <SaveTab onClick={() => handleSaveTabClick(saveTab3)} style={{transform: 'translateX(460%) translateY(200%)'}}>{saveTab3}</SaveTab>
            </MainContainer>
        )
    }
}
export default LoginScreen;
