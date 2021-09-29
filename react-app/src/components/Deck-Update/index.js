import {useEffect, useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editOneDeckThunk } from '../../store/deck';
import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';



export default function EditDeckName({oneDeck}) {
    const dispatch = useDispatch();
    const [deckNames, setDeckNames] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector((state) => Object.values(state.decks))
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


    const onSubmit = (e) => {
        e.preventDefault();
        const editInfo = {
            deckName: deckNames
        }
        dispatch(editOneDeckThunk(oneDeck.id, editInfo))
        setDeckNames("")
    }
    return (
        <div>
            <button onClick={openModal}> Edit Deck</button>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >   
                <h1>Change deck name</h1>
                <form onSubmit={onSubmit} className="edit-deck-name">
                    <input type="text" onChange={e => setDeckNames(e.target.value)}></input>
                    <button type="submit"> change name </button>
                </form>
            </Modal>
        </div>
    )
}