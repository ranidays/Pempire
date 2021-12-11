import React from "react";
import {BookWithHand, Container, Narrator, TitleImg} from "../GlobalStylings";
import {InputField, CustomButton, Header} from "./LoginStylings";
import { Link } from 'react-router-dom';

let titleBorder = "/assets/title_with_border.png";
let BookHand = "/assets/book_with_hand.png";
let narrator = "/assets/narrator.png";

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
      .then(data => {
          this.setState({ webToken: data.token });
          sessionStorage.setItem('jwtToken', data.token);
      });
      }


    render(){
        const { postId } = this.state;
        return(
            <Container>
                <Container>
                    {/* <BookWithHand src={BookHand}/> */}
                    <Narrator src={narrator}/>
                    <CustomButton>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Story" onClick={this.handleClick}>Login</Link>
                    </CustomButton>
                </Container >
            </Container>
        )
    }
}

export default LoginScreen;
