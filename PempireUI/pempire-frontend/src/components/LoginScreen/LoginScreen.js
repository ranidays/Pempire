import React from "react";
import titleBorder from "../../assets/title_with_border.png";
import {BookWithHand, Container, Narrator, TitleImg} from "../GlobalStylings";
import {InputField, CustomButton, Header} from "./LoginStylings";
import BookHand from "../../assets/book_with_hand.png"
import narrator from "../../assets/narrator.png"



const LoginScreen= () => {

    return(

        <Container>
            <Container>
                <BookWithHand src={BookHand}/>
                <Narrator src={narrator}/>
            </Container >
        </Container>

    )
}

export default LoginScreen;
