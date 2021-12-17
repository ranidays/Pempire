import React from "react";
import {CustomButton, MainContainer} from "./HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";
import { Link } from 'react-router-dom';
import { Route } from "react-router";
import {FormInputFieldContainer, Header, InputField, Row, Column} from "../SignUpScreen/SignUpStylings";

let titleBorder = "/assets/title_with_border.png";


const HomeScreen= () => {
    return(
        // <MainContainer>
        //     <TitleImg src={titleBorder} alt=""/>
        //     <CustomButton>
        //         <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Login">Login</Link>
        //     </CustomButton>
        //     <CustomButton>
        //         <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/SignUp">Sign Up</Link>
        //     </CustomButton>
        //     <CustomButton>
        //         <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Combat">Combat?</Link>
        //     </CustomButton>
        // </MainContainer>

        <Container>
            <Row>
                <TitleImg style={{marginBottom: '27%'}} src={titleBorder} alt=""/>
            </Row>
            <CustomButton  style={{paddingBottom: '60px'}}>Login </CustomButton>
            <CustomButton style={{paddingBottom: '50px'}}>Sign Up</CustomButton>
        </Container>

    )
}

export default HomeScreen;
