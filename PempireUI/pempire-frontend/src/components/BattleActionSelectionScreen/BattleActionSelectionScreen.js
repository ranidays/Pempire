import React, {useState} from "react";
import {MainContainer, Column, Row, Header, Subheader, CustomButton} from "./BattleActionSelectionScreenStylings";
import TextBoxWithAnimation from "../TextBoxWithAnimation";

const BattleActionSelectionScreen = (props) => {
    const [violentChargeButton, setViolentChargeButton ]= useState(false);
    const [corrosivePunchButton, setCorrosivePunchButton] = useState(false);
    const [fireballButton, setFireballButton] = useState(false);
    const [fullPowerBlastButton, setFullPowerBlastButton] = useState(false);
    const [corrosiveDartButton, setCorrosiveDartButton ]= useState(false);
    const [brightFlashButton, setBrightFlashButton ]= useState(false);
    const [text, setShowText]= useState(false);
    const [count, setCount]= useState(0);


    const violentChargeToggle = (props) => {
        if(count === 4 && violentChargeButton === true ){
            setViolentChargeButton(!violentChargeButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Max Reached")
            setShowText(!text)
        }
        else{
            setCount(count + 1)
            setViolentChargeButton(!violentChargeButton);
        }
        console.log(violentChargeButton)
        console.log(count);
    };

    const corrosivePunchToggle = (props) => {
        if(count === 4 && corrosivePunchButton === true ){
            setCorrosivePunchButton(!corrosivePunchButton);
            setCount(count - 1)

        }
        else if(count === 4){
            console.log("Max Reached")
            setShowText(!text)
        }
        else{
            setCount(count + 1)
            setCorrosivePunchButton(!corrosivePunchButton);
        }
        console.log(violentChargeButton)
        console.log(count);

    };

    const fireballToggle = (props) => {
        if(count === 4 && fireballButton === true){
            setFireballButton(!fireballButton);
            setCount(count - 1)

        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)
        }
        else{
            setFireballButton(!fireballButton);
            setCount(count + 1)
        }
        console.log(count);

    };

    const fullPowerBlastToggle = (props) => {
        if(count === 4 && fullPowerBlastButton === true){
            setFullPowerBlastButton(!fullPowerBlastButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)
        }
        else{
            setCount(count + 1)
            setFullPowerBlastButton(!fullPowerBlastButton);
        }
        console.log(count);

    };

    const corrosiveDartToggle = (props) => {
        if(count === 4 && corrosiveDartButton === true){
            setCorrosiveDartButton(!corrosiveDartButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)
        }
        else{
            setCount(count + 1)
            setCorrosiveDartButton(!corrosiveDartButton);
            console.log(count);
        }

    };

    const brightFlashToggle = (props) => {
        if(count === 4 && brightFlashButton === true){
            setBrightFlashButton(!brightFlashButton);
            setCount(count - 1)
        }
        else if(count === 4){
            console.log("Reached max")
            setShowText(!text)

        }
        else{
            setCount(count + 1)
            setBrightFlashButton(!brightFlashButton);
            console.log(count);
        }
    };

    return(
        <MainContainer>


            <Header>Battle Action Selection</Header>
            <Subheader>Choose up to four!</Subheader>

            <Row>
                <Column>
                    <CustomButton id='1' onClick={violentChargeToggle}  style={{opacity: violentChargeButton ? '0.3' : '1'} } >Violent Charge</CustomButton>
                </Column>

                <Column>
                    <CustomButton onClick={corrosivePunchToggle}  style={{opacity: corrosivePunchButton ? '0.3' : '1'} }>Corrosive Punch</CustomButton>
                </Column>
            </Row>

            <Row>
                <Column>
                    <CustomButton onClick={fireballToggle}  style={{opacity: fireballButton ? '0.3' : '1'} }>Fireball</CustomButton>
                </Column>
                <Column>
                    <CustomButton onClick={fullPowerBlastToggle}  style={{opacity: fullPowerBlastButton ? '0.3' : '1'} }>Full-Power Blast</CustomButton>
                </Column>
            </Row>
            <Row>
                <Column>
                    <CustomButton onClick={corrosiveDartToggle}  style={{opacity: corrosiveDartButton ? '0.3' : '1'} }>Corrosive Dart</CustomButton>
                </Column>
                <Column>
                    <CustomButton onClick={brightFlashToggle}  style={{opacity: brightFlashButton ? '0.3' : '1'} }>Bright Flash</CustomButton>
                </Column>
            </Row>

        </MainContainer>
    )
}

export default BattleActionSelectionScreen;