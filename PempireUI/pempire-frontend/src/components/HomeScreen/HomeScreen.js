import React from "react";
import {CustomButton} from "./HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";
import { Link } from 'react-router-dom';
import { Route } from "react-router";

let titleBorder = "/assets/title_with_border.png";


const HomeScreen= () => {
    return(
        <Container>
            <TitleImg src={titleBorder} alt=""/>
            <CustomButton>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Login">Login</Link>
            </CustomButton>
            <CustomButton>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/SignUp">Sign Up</Link>
            </CustomButton>
            <CustomButton>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Combat">Combat?</Link>
            </CustomButton>
        </Container>

    )
}

export default HomeScreen;
