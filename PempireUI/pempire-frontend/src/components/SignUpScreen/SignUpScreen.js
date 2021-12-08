import React from "react";
import titleBorder from "../../assets/title_with_border.png";
import {Container, TitleImg} from "../GlobalStylings";
import {InputField, Header} from "./SignUpStylings"
import {CustomButton} from "./SignUpStylings";

const SignUpScreen= () => {
    return(

        <Container>
            <Header>Registration</Header>
            <TitleImg src={titleBorder} alt=""/>
            <InputField type="text" placeholder="Email Address"/>
            <InputField type="password" placeholder="Password"/>
            <InputField type="password" placeholder="Confirm Password"/>
            <CustomButton to='Login' >Sign Up</CustomButton>

        </Container>

    )
}

export default SignUpScreen;
