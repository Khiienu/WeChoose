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
            {/* <form> */}
                {/* <select value={deckId}>
                    {decks.map(deck => (
                        <option key={deck.id} value={deck.id} onClick={() => {setDeckId(deck.id);}}>{deck.deckName}</option>
                    ))}
                </select> */}

                    {decks.map(deck => (
                        <button key={deck.id} onClick={() => {
                            setDeckId(deck.id);
                            console.log(oneCard.id, deckId, "THIS IS FOR ADD TO CARD")}
                        }>{deck.deckName}</button>
                    ))}

                <button onClick={(e) => {
                    dispatch(addCTD(oneCard.id, deckId))
                    console.log(oneCard.id, deckId, "THIS IS FOR ADD TO CARD")
                    }}>ADD TO DECK</button>
            {/* </form> */}
        </>
    )
}