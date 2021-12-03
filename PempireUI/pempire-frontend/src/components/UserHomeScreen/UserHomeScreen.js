import React from "react";
import titleBorder from "../../assets/title_with_border.png"
import {CustomButton} from "../HomeScreen/HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";


const HomeScreen= () => {
    return(

        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <CustomButton>Load A Game</CustomButton>

            <CustomButton>New Game</CustomButton>
        </Container>

    )
}

export default HomeScreen;
