import React from "react";
import titleBorder from "../../assets/title_with_border.png"
import {CustomButton} from "./HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";
import { Link } from 'react-router-dom';
import LoginScreen from "../LoginScreen/LoginScreen";
import { Route } from "react-router";


const HomeScreen= () => {
    return(
        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <CustomButton>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Login">Login</Link>
            </CustomButton>
            <CustomButton>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Login">Sign Up</Link>
            </CustomButton>
        </Container>

    )
}

export default HomeScreen;
