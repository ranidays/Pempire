import React from "react";
import {CustomButton} from "../HomeScreen/HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";

let titleBorder = "/assets/title_with_border.png";

const HomeScreen= ({ authorized }) => {

    return(
        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <CustomButton>Load A Game</CustomButton>
            <CustomButton>Load A Game</CustomButton>
            <CustomButton>New Game</CustomButton>
        </Container>

    )
}

export default HomeScreen;
