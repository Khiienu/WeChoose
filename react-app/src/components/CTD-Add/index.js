import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCTD } from "../../store/cardtoDeck";

export default function AddToDeck({cardToDeck}) {
    const dispatch = useDispatch();
    const [cardId, setCardId] = useState("")
    const [deckId,setDeckId] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const [showForm, setShowForm] = useState(false)
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

    const openMenu = () => setShowMenu(true);
    const closeMenu = () => {
        setShowMenu(false)
        setShowForm(false)
    };
    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    return (
    <>
        {showMenu &&
            <div className="song_addForm">
                <button onClick={!showForm ? openForm : closeForm }>Add to deck</button>
                {showForm &&
                    <div className="">
                        {decks?.map(deck => (
                            <button key={deck.id}
                                value={deck}
                                onClick={() =>{
                                    dispatch(addCTD({deck: deck, card: card}))
                                    closeMenu()
                                    }}>
                                {deck.name}
                            </button>
                        ))}
                    </div>
                }
            </div>
        }   
    </>
    )
}