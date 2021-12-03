import React from "react";
import titleBorder from "../../assets/title_with_border.png"
import {CustomButton} from "./HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";

const HomeScreen= () => {
    return(

        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <CustomButton>Login</CustomButton>

            <CustomButton>Sign Up</CustomButton>
        </Container>

    )
}

export default HomeScreen;
