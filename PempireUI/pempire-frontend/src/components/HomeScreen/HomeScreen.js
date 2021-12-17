import React from "react";
import {CustomButton, MainContainer} from "./HomeStylings";
import {Container, TitleImg} from "../GlobalStylings";
import { Link } from 'react-router-dom';
import { Route } from "react-router";
import {FormInputFieldContainer, Header, InputField, Row, Column} from "../SignUpScreen/SignUpStylings";

let titleBorder = "/assets/title_with_border.png";


const HomeScreen= () => {
    return(
        <Container>
            <Row>
                <TitleImg style={{marginBottom: '27%'}} src={titleBorder} alt=""/>
            </Row>
            <CustomButton  style={{paddingBottom: '60px'}}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/Login"> Login</Link>
            </CustomButton>
            <CustomButton style={{paddingBottom: '50px'}} >
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/signup"> Sign Up</Link>
            </CustomButton>
        </Container>

    )
}

export default HomeScreen;
