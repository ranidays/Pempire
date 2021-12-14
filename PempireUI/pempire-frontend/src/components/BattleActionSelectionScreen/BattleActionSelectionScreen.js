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

    let counter = 0;

    const violentChargeToggle = (props) => {
        if(counter === 4){
            setShowText(!text);
        }
        else{
            setCount(setCount + 1)
            setViolentChargeButton(!violentChargeButton);
            if(!violentChargeButton){
                counter--
            }

        }
        console.log(counter);
    };

    const corrosivePunchToggle = (props) => {
        if(counter === 4){
            setShowText(!text);
        }
        else{

            setCorrosivePunchButton(!corrosivePunchButton);
            setCount(setCount + 1)
            if(corrosivePunchButton === false){
                counter--
            }


        }
        console.log(count);
    };

    const fireballToggle = (props) => {
        if(counter === 4){
            setShowText(!text);
        }
        else{

            setFireballButton(!fireballButton);
            setCount(setCount + 1)
            if(fireballButton === false){
                counter--
            }

        }
        console.log(count);

    };

    const fullPowerBlastToggle = (props) => {
        if(counter === 4){
            setShowText(!text);
        }
        else{
            counter = counter + 1;
            setFullPowerBlastButton(!fullPowerBlastButton);
            if(fullPowerBlastButton === false){
                counter--
            }
            console.log(counter);
        }

    };

    const corrosiveDartToggle = (props) => {
        if(counter === 4){
            setShowText(!text);
        }
        else{
            counter = counter + 1;
            setCorrosiveDartButton(!corrosiveDartButton);
            if(corrosiveDartButton === false){
                counter--
            }
            console.log(counter);
        }

    };

    const brightFlashToggle = (props) => {
        if(counter === 4){


        }
        else{
            counter = counter + 1;
            setBrightFlashButton(!brightFlashButton);
            if(brightFlashButton === false){
                counter --
            }
            console.log(counter);
        }

    };


    return(
        <MainContainer>

            <TextBoxWithAnimation stringToType={"Time to login. The adventure awaits."} style={{display: setShowText ? 'initial' : 'none'}} />

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