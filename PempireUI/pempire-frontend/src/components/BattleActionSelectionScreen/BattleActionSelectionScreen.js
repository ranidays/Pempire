import React from "react";
import {MainContainer, Column, Row, Header, Subheader, CustomButton} from "./BattleActionSelectionScreenStylings";

const BattleActionSelectionScreen = () => {
    return(
        <MainContainer>
            <Header>Battle Action Selection</Header>
            <Subheader>Choose up to four!</Subheader>

            <Row>
                <Column>
                    <CustomButton>Helo</CustomButton>
                </Column>

                <Column>
                    <CustomButton>Helo</CustomButton>
                </Column>
            </Row>

            <Row>
                <Column>
                    Hello
                </Column>
                <Column>
                    Hello
                </Column>
            </Row>
            <Row>
                <Column>
                    Hello
                </Column>
                <Column>
                    Hello
                </Column>
            </Row>

        </MainContainer>
    )
}

export default BattleActionSelectionScreen;