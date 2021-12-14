import React, {useState, useEffect} from "react";
import {TextBox} from "./GlobalStylings";

function TextBoxWithAnimation({stringToType}) {
    const [shownText, setShownText] = useState('');
    const index = React.useRef(0);
    const [hiddenText, setHiddenText] = useState(stringToType);

    React.useEffect(() => {
        function tick() {
            setShownText(prev => prev + stringToType[index.current]);
            setHiddenText(prev => prev.substring(1));
            index.current++;
        }
        if (index.current < stringToType.length) {
            let addChar = setInterval(tick, 20);
            return () => clearInterval(addChar);
        }
    }, [shownText, hiddenText]);

    return (
        <TextBox>
            {shownText} 
            <span style={{color:'black'}}>{hiddenText}</span>
        </TextBox>
    )
}

export default TextBoxWithAnimation;