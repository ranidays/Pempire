import React from "react";
import { Container,  TitleImg} from "../GlobalStylings";
import {CustomButton, Header, SaveTab1, SaveTab2, SaveTab3} from "./LoginStylings";
import { Link } from 'react-router-dom';

import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {MainContainer, LeftContainer, RightContainer, BookWithHand, Narrator, FormInputFieldContainer, InputField, SaveTab} from "./LoginStylings";

let titleBorder = "/assets/title_with_border.png";
let BookHand = "/assets/book_with_hand.png";
let narrator = "/assets/narrator.png";
let bookTab = "/assets/book_savetab.png";

class LoginScreen extends React.Component{
    constructor() {
      super()
      this.state = {
        webToken: null
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
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
      .then(data => this.setState({ webToken: data.token }));
      sessionStorage.setItem('jwtToken', this.webToken);
  }


    render(){
        const { postId } = this.state;
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
                    <CustomButton>Login</CustomButton>

                </RightContainer>

                <SaveTab style={{transform: 'translateX(460%)', display: 'none'}}>Saved Game 1</SaveTab>
                <SaveTab style={{transform: 'translateX(460%) translateY(400%)', display: 'none'}}>Saved Game 2</SaveTab>
                <SaveTab style={{transform: 'translateX(460%) translateY(200%)', display: 'none'}}>New Game</SaveTab>


            </MainContainer>

                // <Container>
                //     <SaveTab1 src={bookTab}/>
                //     <SaveTab2 src={bookTab} />
                //     <SaveTab3 src={bookTab}/>
                //     <BookWithHand src={BookHand}/>
                //     <Narrator src={narrator}/>
                //
                //     <InputField type="text" placeholder="Email Address"/>
                //     <InputField type="text" placeholder="Password"/>
                //
                //         <CustomButton>
                //             <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Story" onClick={this.handleClick}>Login</Link>
                //         </CustomButton>
                // </Container>

        )
    }
}

export default LoginScreen;
