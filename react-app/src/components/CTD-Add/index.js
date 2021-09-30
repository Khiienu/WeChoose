import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCTD } from "../../store/cardtoDeck";
import { getDecks } from "../../store/deck";
import { getCardsThunk } from "../../store/card";
import React from 'react';
import Modal from 'react-modal';
import './index.css'

export default function AddToDeck({oneCard}) {
    const dispatch = useDispatch();
    // const [cardId, setCardId] = useState("")
    // const sessionUser = useSelector((state) => state.session.user);
    // const cards = useSelector((state) => Object.values(state.cards));
    const decks = useSelector((state) => Object.values(state.decks));
    const [deckId,setDeckId] = useState("")
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


    function openModal(){
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false)
    }

    useEffect(() => {
        dispatch(getDecks())
        dispatch(getCardsThunk())
    }, [dispatch])
 
    function add() {
        dispatch(addCTD(oneCard.id, deckId))
        closeModal();
    }
    return (
        <>
        <div>
            <button className="button-card" onClick={openModal}> Add this card to a deck </button>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            > 
                <h3>Choose a deck to add</h3>
                <div className="form-for-decks">
                    {decks.map(deck => {
                            return (<button className="decks" key={deck.id} onClick={() => {
                                setDeckId(deck.id);
                            }}>{deck.deckName}</button>)
                    })}
                <button className="add-button" onClick={
                    add
                }>ADD TO DECK</button>
                </div>
            </Modal>
        </div>
        </>
    )
}

// function add() {
//     dispatch(addCTD(oneCard.id, deckId))
//     closeModal();
// }