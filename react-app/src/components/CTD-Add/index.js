import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCTD } from "../../store/cardtoDeck";

export default function AddToDeck({cardToDeck}) {
    const dispatch = useDispatch();
    const [cardId, setCardId] = useState("")
    const [deckId,setDeckId] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    const cards = useSelector((state) => Object.values(state.cards));
    const decks = useSelector((state) => Object.values(state.decks));

    const onSubmit = (e) => {
        e.preventDefault();
        const addCard = {
            cardId: cardId,
            deckId: deckId
        }
        dispatch(addCTD(cardToDeck, addCard))
        setCardId("");
        setDeckId("");
    }
    return (
        
    )
}