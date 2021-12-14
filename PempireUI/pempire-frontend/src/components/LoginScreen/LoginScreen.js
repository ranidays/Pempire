import React, {useState} from "react";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {MainContainer, LeftContainer, RightContainer, BookWithHand, Narrator, FormInputFieldContainer, InputField, SaveTab, CustomButton} from "./LoginStylings";

let BookHand = "/assets/book_with_hand.png";
let narrator = "/assets/narrator.png";

const LoginScreen = (props) => {
    const [webToken, setWebToken] = useState(null);
    const handleClick = () => {
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
            .then(data => setWebToken({ webToken: data.token }));
        sessionStorage.setItem('jwtToken', this.webToken);
    }

    return(

        <MainContainer>

            <TextBoxWithAnimation stringToType={"Time to login. The adventure awaits."} />

            <LeftContainer>
                <Narrator src={narrator}/>

            </LeftContainer>


            <RightContainer>

                <BookWithHand src={BookHand}/>
                <FormInputFieldContainer>
                    <InputField type="text" placeholder="Email Address"/>
                    <InputField type="text" placeholder="Password"/>
                </FormInputFieldContainer>
                <CustomButton to="/Story" onClick={handleClick}>Login</CustomButton>

            </RightContainer>

            <SaveTab style={{transform: 'translateX(460%)', display: 'none'}}>Saved Game 1</SaveTab>
            <SaveTab style={{transform: 'translateX(460%) translateY(400%)', display: 'none'}}>Saved Game 2</SaveTab>
            <SaveTab style={{transform: 'translateX(460%) translateY(200%)', display: 'none'}}>New Game</SaveTab>


        </MainContainer>
    )



}
export default LoginScreen;
