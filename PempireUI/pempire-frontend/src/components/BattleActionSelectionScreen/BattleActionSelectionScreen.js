import React, {useEffect, useState} from "react";
import {MainContainer, Column, Row, Header, Subheader, CustomButton} from "./BattleActionSelectionScreenStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";
import {Link} from "react-router-dom";

const BattleActionSelectionScreen = (props) => {
    const [violentChargeButton, setViolentChargeButton ]= useState(false);
    const [corrosivePunchButton, setCorrosivePunchButton] = useState(false);
    const [fireballButton, setFireballButton] = useState(false);
    const [fullPowerBlastButton, setFullPowerBlastButton] = useState(false);
    const [corrosiveDartButton, setCorrosiveDartButton ]= useState(false);
    const [brightFlashButton, setBrightFlashButton ]= useState(false);
    const [text, setShowText]= useState(false);
    const [count, setCount]= useState(0);
    const [hasAccess, setHasAccess] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [jsonData, setJsonData] = useState();
    const [att1, setAtt1] = useState();
    const [att2, setAtt2] = useState();
    const [att3, setAtt3] = useState();
    const [att4, setAtt4] = useState();
    const [sm1, setSm1] = useState();
    const [sm2, setSm2] = useState()
    const [routeParam1, setRouteParam1] = useState()
    const [routeParam2, setRouteParam2] = useState()
    const [routeParam3, setRouteParam3] = useState()
    const [routeParam4, setRouteParam4] = useState()

    const moves = [violentChargeButton, corrosiveDartButton, corrosivePunchButton, fireballButton, brightFlashButton, fullPowerBlastButton];
    const moveNames = ["Att1", "SM1", "Att2", "Att3", "SM2", "Att4"]
    const selectedMoves = [];

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('jwtToken')
        }
    };

    useEffect(() => {
        //TODO: REMOVE getJWT LATER ON.
        const getJWT =  () => {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "Email": "a@c.com",
                    "Password": "Password1!"
                })
            };
            fetch('http://localhost:5000/api/authentication/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem('jwtToken', data.token);
                })
                .catch(error => {
                    console.log("error: " + error);
                });

        }

        const fetchMoves = async () => {
            const response = await fetch('http://localhost:5000/api/battleactionselection', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setJsonData(data)
                    console.log(data);
                    setAtt1(data.Att1.name);
                    setAtt2(data.Att2.name);
                    setAtt3(data.Att3.name);
                    setAtt4(data.Att4.name);
                    setSm1(data.SM1.name);
                    setSm2(data.SM2.name);
                    setHasAccess(true);

            });
        }
        getJWT()
        fetchMoves()
    })

    const violentChargeToggle = () => {
        if(count === 4 && violentChargeButton === true && showButton === false){
            //do nothing
        }
        else if(count === 4 && violentChargeButton === true ){
            setViolentChargeButton(!violentChargeButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Max Reached")
            setShowText(!text)
        }
        else if(count < 4 && violentChargeButton === true){
            setViolentChargeButton(!violentChargeButton);
            setCount(count - 1)
        }
        else{
            setCount(count + 1)
            setViolentChargeButton(!violentChargeButton);
        }
        console.log(violentChargeButton)
        console.log(count);
    };

    const corrosivePunchToggle = () => {
        if(count === 4 && corrosivePunchButton === true && showButton === false){
            //do nothing
        }
        else if(count === 4 && corrosivePunchButton === true ){
            setCorrosivePunchButton(!corrosivePunchButton);
            setCount(count - 1)

        }
        else if(count === 4){
            console.log("Max Reached")
            setShowText(!text)

        }
        else if(count < 4 && corrosivePunchButton === true){
            setCorrosivePunchButton(!corrosivePunchButton);
            setCount(count - 1)
        }
        else if(showButton === false){
            //do nothing
        }
        else{
            setCount(count + 1)
            setCorrosivePunchButton(!corrosivePunchButton);
        }
        console.log(violentChargeButton)


    };

    const fireballToggle = () => {
        if(count === 4 && fireballButton === true && showButton === false){
            //do nothing
        }
        else if(count === 4 && fireballButton === true){
            setFireballButton(!fireballButton);
            setCount(count - 1)

        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)
        }
        else if(count < 4 && fireballButton === true){
            setFireballButton(!fireballButton);
            setCount(count - 1)
        }
        else if(showButton === false){
            //do nothing
        }
        else{
            setFireballButton(!fireballButton);
            setCount(count + 1)
        }
        console.log(count);

    };

    const fullPowerBlastToggle = () => {
        if(count === 4 && fullPowerBlastButton === true && showButton === false){
            //do nothing
        }
        else if(count === 4 && fullPowerBlastButton === true){
            setFullPowerBlastButton(!fullPowerBlastButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)

        }
        else if( count < 4 && fullPowerBlastButton === true){
            setFullPowerBlastButton(!fullPowerBlastButton);
            setCount(count - 1)
        }
        else if(showButton === false){
            //do nothing
        }
        else{
            setCount(count + 1)
            setFullPowerBlastButton(!fullPowerBlastButton);
        }
        console.log(count);

    };

    const corrosiveDartToggle = () => {
        if(count === 4 && corrosiveDartButton === true && showButton === false){
            //do nothing
        }
        else  if(count === 4 && corrosiveDartButton === true){
            setCorrosiveDartButton(!corrosiveDartButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)
        }
        else if(count < 4 && corrosiveDartButton === true){
            setCorrosiveDartButton(!corrosiveDartButton);
            setCount(count - 1)
        }
        else if(showButton === false){
            //do nothing
        }
        else{
            setCount(count + 1)
            setCorrosiveDartButton(!corrosiveDartButton);
            console.log(count);
        }

    };

    const brightFlashToggle = () => {
        if(count === 4 && brightFlashButton === true && showButton === false){
            //do nothing
        }
        else  if(count === 4 && brightFlashButton === true){
            setBrightFlashButton(!brightFlashButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)

        }
        else if(count < 4 && brightFlashButton === true){
            setBrightFlashButton(!brightFlashButton);
            setCount(count - 1)
        }
        else if(showButton === false){
            //do nothing
        }
        else{
            setCount(count + 1)
            setBrightFlashButton(!brightFlashButton);

            console.log(count);
        }
    };

    const handleClick = () => {
        for (let x in moves){
            if(moves[x] === true){
                selectedMoves.push(moveNames[x])
            }
            console.log(selectedMoves[0]);
        }
        setRouteParam1(selectedMoves[0])
        setRouteParam2(selectedMoves[1])
        setRouteParam3(selectedMoves[2])
        setRouteParam4(selectedMoves[3])
        setShowButton(false);
    }

    if(hasAccess){
        return(
            <MainContainer>
                <Header>Battle Action Selection</Header>
                <Subheader>Choose up to four!</Subheader>


                <Row>
                    <Column>
                        <CustomButton onClick={violentChargeToggle}  style={{opacity: violentChargeButton ? '0.3' : '1'}} >
                            {att1}
                        </CustomButton>
                    </Column>

                    <Column>
                        <CustomButton onClick={corrosivePunchToggle}  style={{opacity: corrosivePunchButton ? '0.3' : '1'} }>{att2}</CustomButton>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <CustomButton onClick={fireballToggle}  style={{opacity: fireballButton ? '0.3' : '1'} }>{att3}</CustomButton>
                    </Column>
                    <Column>
                        <CustomButton onClick={fullPowerBlastToggle}  style={{opacity: fullPowerBlastButton ? '0.3' : '1'} }>{att4}</CustomButton>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <CustomButton onClick={corrosiveDartToggle}  style={{opacity: corrosiveDartButton ? '0.3' : '1'} }>{sm1}</CustomButton>
                    </Column>
                    <Column>
                        <CustomButton onClick={brightFlashToggle}  style={{opacity: brightFlashButton ? '0.3' : '1'} }>{sm2}</CustomButton>
                    </Column>
                </Row>
                <Row>

                    <CustomButton onClick={handleClick} style={{ background: 'transparent', marginTop: '8%', borderRadius: '60px', fontSize: '20px', display: showButton ? 'initial' : 'none'} }>I'm done selecting!</CustomButton>

                    <CustomButton  style={{ background: 'transparent', display: showButton ? 'none' : 'initial',  marginTop: '8%', borderRadius: '60px'} }>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/Combat/${routeParam1}/${routeParam2}/${routeParam3}/${routeParam4}}`} >Next</Link>
                    </CustomButton>
                </Row>
            </MainContainer>
        )
    }
    else{
        return(
            <TextBoxWithAnimation stringToType="Seems like you don't belong here"/>
        )
    }
}
export default BattleActionSelectionScreen;