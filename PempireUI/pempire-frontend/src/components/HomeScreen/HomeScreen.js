import React from "react";
import titleBorder from "../../assets/title_with_border.png"
import {Container, TitleImg, Text} from "./HomeStylings";

const HomeScreen= () => {
    return(

        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <Text>Login</Text>

            <Text>Sign Up</Text>
        </Container>

    )
}

export default HomeScreen;
