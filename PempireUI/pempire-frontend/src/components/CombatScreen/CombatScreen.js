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
  const [user, setUser] = useState({});
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
    const jwt = sessionStorage.getItem("jwt");
    fetch("http://localhost:5000/api/authentication/getuserfromtoken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    })
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(err => console.log(err));
  }, []);

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
        <CombatProfile health={75} mana={25} />
        <PixelButton>
          <p>Back</p>
        </PixelButton>
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