import React from "react";
import {BookWithHand, Narrator} from "../GlobalStylings";
import BookHand from "../../assets/book_with_hand.png"
import narrator from "../../assets/narrator.png"
import {Container} from "./StoryScreenStylings"
import { Link } from "react-router-dom";
import {InputField, CustomButton, Header} from "./StoryScreenStylings";



class StoryScreen extends React.Component{
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
          headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
        },
          body: JSON.stringify({ 
            "Name": 1
            })
      };
      fetch('http://localhost:5000/api/gamelogic/CharacterSelected', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({}));
      }
    render (){
        return(
            <Container>
                <BookWithHand src={BookHand}/>
                <Narrator src={narrator}/>
                <CustomButton>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Story" onClick={this.handleClick}>Hapepe</Link>
                </CustomButton>
            </Container >
        )
    }
}
export default StoryScreen;
