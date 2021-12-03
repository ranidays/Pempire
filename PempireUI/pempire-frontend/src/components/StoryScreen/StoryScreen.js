import React from "react";
import {BookWithHand, Narrator} from "../GlobalStylings";
import BookHand from "../../assets/book_with_hand.png"
import narrator from "../../assets/narrator.png"
import {Container} from "./StoryScreenStylings"



const StoryScreen = () => {
    return(
        <Container>
            <BookWithHand src={BookHand}/>
            <Narrator src={narrator}/>

        </Container >

    )


}
export default StoryScreen;
