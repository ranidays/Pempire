import React from "react";
import titleBorder from "../../assets/title_with_border.png";
import {Container, TitleImg} from "../GlobalStylings";
import {InputField, CustomButton, Header} from "./LoginStylings";

const LoginScreen= () => {
    return(

        <Container>
            <Header>Welcome!</Header>
            <TitleImg src={titleBorder} alt=""/>
            <InputField type="text" placeholder="Email Address"/>
            <InputField type="password" placeholder="Password"/>
            <CustomButton>Login</CustomButton>

        </Container>

    )
}

export default LoginScreen;
