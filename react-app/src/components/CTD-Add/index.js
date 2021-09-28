import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCTD } from "../../store/cardtoDeck";
import { useParams} from 'react-router'

export default function AddToDeck({oneCard}) {
    const dispatch = useDispatch();
    // const [cardId, setCardId] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    const cards = useSelector((state) => Object.values(state.cards));
    const decks = useSelector((state) => Object.values(state.decks));
    const [deckId,setDeckId] = useState("")
    // const []

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const addCard = {
    //         cardId: oneCard.id,
    //         deckId: deckId
    //     }
    //     dispatch(addCTD(addCard))
    //     // setCardId("");
    // }
    return (
        <>
        {decks.map(deck => {
            console.log(oneCard.id, "THIS IS oneCard")
            console.log(deck.userCards, "THIS IS DECKS AND USERCARDS")
            // if(!deck.userCards.includes(oneCard)) 
            // const check = deck.userCards.map(cardId => {
            //     return cardId
            // })
            // console.log(check, "CARD ID")
                return (<button key={deck.id} onClick={() => {
                    setDeckId(deck.id);
                }}>{deck.deckName}</button>)
            
            
        })}

        <button onClick={(e) => {
            // if(decks.id.userCards.includes(oneCard.id)) {

            // }
            dispatch(addCTD(oneCard.id, deckId))
        }}>ADD TO DECK</button>
        </>
    )
}