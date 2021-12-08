import React from "react";
import titleBorder from "../../assets/title_with_border.png";
import {BookWithHand, Container, Narrator, TitleImg} from "../GlobalStylings";
import {InputField, CustomButton, Header} from "./LoginStylings";
import BookHand from "../../assets/book_with_hand.png"
import narrator from "../../assets/narrator.png"
import { Link } from 'react-router-dom';



class LoginScreen extends React.Component{
    constructor() {
      super()
      this.state = {
        postId: null
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
      .then(data => this.setState({ postId: data.token }));
      }


    render(){
        const { postId } = this.state;
        return(
            <Container>
                <Container>
                    {/* <BookWithHand src={BookHand}/> */}
                    <Narrator src={narrator}/>
                    <CustomButton>
                        Post Request
                    </CustomButton>
                    <button className='button' onClick={this.handleClick}>Post Request</button>
                    <div className="card-body">
                    Returned Id: {postId}
                     </div>
                </Container >
            </Container>
        )
    }
}

export default LoginScreen;
