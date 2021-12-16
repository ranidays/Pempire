import React, {useState} from "react";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {MainContainer, LeftContainer, RightContainer, BookWithHand, Narrator, FormInputFieldContainer, InputField, SaveTab, CustomButton} from "./LoginStylings";
import {Link} from "react-router-dom";

let BookHand = "/assets/book_with_hand.png";
let narrator = "/assets/narrator.png";

const LoginScreen = () => {
    const [webToken, setWebToken] = useState(null);
    const [gameState, setGameStates] = useState(null);
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
        // sessionStorage.setItem('jwtToken', webToken);
    }

    const handleHasAccessClick = () => {

    }

    if(!hasAccess){
        return(
            <MainContainer>
                <TextBoxWithAnimation stringToType={"Time to login. The adventure awaits."} />

                <LeftContainer>
                    <Narrator src={narrator}/>
                </LeftContainer>

                <RightContainer>
                    <BookWithHand src={BookHand}/>
                    <FormInputFieldContainer>
                        <InputField onChange={e => setEmail(e.target.value)} type="text" placeholder="Email Address"/>
                        <InputField onChange={e => setPassword(e.target.value)} type="text" placeholder="Password"/>
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
        //Show save tabs


        return(
            <MainContainer>
                <TextBoxWithAnimation stringToType={"Choose to load a previous or start a new game"} />

                <LeftContainer>
                    <Narrator src={narrator}/>
                </LeftContainer>

                <RightContainer>
                    <BookWithHand src={BookHand}/>

                    <CustomButton onClick={() => handleHasAccessClick()}>
                        {/*<Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Shop">Login</Link>*/}
                        Next
                    </CustomButton>
                </RightContainer>

                <SaveTab style={{transform: 'translateX(460%) translateY(10%)'}}>{saveTab1}</SaveTab>
                <SaveTab style={{transform: 'translateX(460%) translateY(400%)'}}>{saveTab2}</SaveTab>
                <SaveTab style={{transform: 'translateX(460%) translateY(200%)'}}>{saveTab3}</SaveTab>
            </MainContainer>
        )
    }

}
export default LoginScreen;
