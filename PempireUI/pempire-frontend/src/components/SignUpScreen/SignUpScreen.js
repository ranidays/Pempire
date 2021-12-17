import React, {useState} from "react";
import {Container, TitleImg} from "../GlobalStylings";
import {InputField, Header} from "./SignUpStylings"
import {CustomButton, Row, Column, FormInputFieldContainer} from "./SignUpStylings";
import LoginScreen from "../LoginScreen/LoginScreen";
import  { Navigate } from 'react-router-dom'

let titleBorder = "/assets/title_with_border.png";

const SignUpScreen= () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [errorMsg, setErrorMsg] = useState("")
    const [errorStatus, setErrorStatus] = useState(false)
    const [signUpSuccessful, setSignUpSuccessful] = useState(false);

    const handleClick = () => {

        fetch('http://localhost:5000/api/authentication/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "Email": email,
                "Password": password,
                "Username": username
            })
        }).then(response =>
            {
                if(response.status === 400){
                    setErrorMsg("There was an error with signing up. Try again.");
                    setErrorStatus(true);
                    setSignUpSuccessful(false);
                }
                else{
                    console.log("new user added")
                    setSignUpSuccessful(true);
                }
            }
        )
    }

    if(signUpSuccessful){
        return <Navigate to='/login'  />;

    }
    else{
        return(
            <Container>
                <Row>
                    <TitleImg src={titleBorder} alt=""/>
                    <Row>
                        <Header>Registration</Header>
                        <Header style={{display: errorStatus ? 'initial' : 'none', bottom: '58%', right: '27%', fontSize: '26px', color: 'red' , padding: '6%',}}>{errorMsg}</Header>
                    </Row>

                </Row>
                <FormInputFieldContainer>
                    <Row>
                        <InputField onChange={e => setEmail(e.target.value)} type="text" placeholder="Email Address"/>
                    </Row>
                   <Row>
                       <InputField onChange={e => setUsername(e.target.value)} type="text" placeholder="Username"/>
                   </Row>
                    <Row>
                        <InputField onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    </Row>
                    <Row>
                        <InputField type="password" placeholder="Confirm Password"/>
                    </Row>




                </FormInputFieldContainer>

                <CustomButton onClick={handleClick} >Sign Up</CustomButton>

            </Container>
        )
    }
}

export default SignUpScreen;
