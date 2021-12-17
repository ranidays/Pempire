import React, { useState, useEffect} from "react";
import { ElementType, findElementByElementType } from "../../elements";
import { findMoveByIdentifier, moves } from "../../moves";
import { CombatContainer, CombatOptions, MoveTypeDisplay, MoveDisplay, CombatOptionButton, BackButton, UserDisplay,
  FoeDisplay } from "./CombatStylings";
import { CombatProfile } from "./CombatComponents";
import { PixelButton } from "../GlobalStylings";
import ItemBagScreen from "../ItemBag/ItemBagScreen";

const CombatScreen = (props) => {
  const numButtons = 4;
  const selectedMoves = moves.slice(0, 4);
  const [jwt, setJwt] = useState(null);
  //const [showingItems, setShowingItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [usedItems, setUsedItems] = useState([]);

  const [itemsState, setItemsState] = useState({
    usedItems: [],
    showingItems: false,
})

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        "battlemove": findMoveByIdentifier("Att1").enumeration,
        "foeelement": findElementByElementType(ElementType.WATER).enumeration
      })
    };

    console.log(requestOptions.body);
    fetch("http://localhost:5000/api/combat/battleaction", requestOptions)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  const showItems = () => {
    var newState = {...itemsState};
    newState.showingItems = true;
    setItemsState(newState);
  }

  const itemBagCallback = (used) => {
    var newState = {...itemsState};
    newState.usedItems = used;
    newState.showingItems = false;
    setItemsState(newState);
  }

  useEffect(() => {
    usedItems.forEach(i => {
      console.log(`    i`);
    })
  }, [usedItems])

  if (itemsState.showingItems){
    console.log(itemsState.usedItems);
    return <ItemBagScreen usedItems={itemsState.usedItems} callback={itemBagCallback}></ItemBagScreen>
  } else {
    return <CombatContainer>
      <FoeDisplay>
        <CombatProfile />
      </FoeDisplay>
      <UserDisplay>
        <CombatProfile />
        <BackButton>Back</BackButton>
        <PixelButton onClick={() => showItems()}>
          <p>Items</p>
        </PixelButton>
      </UserDisplay>
      <CombatOptions>
        <MoveDisplay>
          {selectedMoves.map(x =>
            <CombatOptionButton onClick={handleClick}>{x.name}</CombatOptionButton>
          )}
        </MoveDisplay>
        <MoveTypeDisplay>
          {selectedMoves.map(x =>
            <CombatOptionButton onClick={handleClick}>{x.name}</CombatOptionButton>
          )}
        </MoveTypeDisplay>
      </CombatOptions>
    </CombatContainer>
  }
}

export default CombatScreen;