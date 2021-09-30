import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { editOneCardThunk, getCardsThunk } from '../../store/card';
import React from 'react';
// import ReactDom from 'react-dom';
import Modal from 'react-modal';
import './index.css';
import { getDecks } from '../../store/deck';


export default function EditCard({oneCard}) {
    const dispatch = useDispatch();
    const [name, setName] = useState(oneCard?.name)
    const [description, setDescription] = useState(oneCard?.description)
    const [typeofcuisine, setTypeOfCuisine] = useState(oneCard?.typeofcuisine)
    // const sessionUser = useSelector((state) => state.session.user)
    // const cards = useSelector((state) => Object.values(state.cards))
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
    const editCardInfo = {
        name: name,
        description: description,
        typeofcuisine: typeofcuisine
    }
    const onEditSubmit = (e) => {
        e.preventDefault();
        dispatch(editOneCardThunk(oneCard.id, editCardInfo))
        dispatch(getDecks())
        dispatch(getCardsThunk())
        // setName('');
        // setDescription('');
        // setTypeOfCuisine('');
    }
    function editCard() {
        dispatch(editOneCardThunk(oneCard.id, editCardInfo))
        closeModal()
    }
    return (
        <div>
            <button className="button-card" onClick={openModal}>Edit card details</button>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            > 
                <form onSubmit={onEditSubmit} className="edit-card-name">
                    <h2>Change card details</h2>
                    <input className="headers" type="text" value={name} onChange={e => setName(e.target.value)} maxLength="25"></input>
                    <textarea className="headers-ta" type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Change Description" maxLength="75"></textarea>
                    <input className="headers" type="text" value={typeofcuisine} onChange={e => setTypeOfCuisine(e.target.value)} placeholder="Change type of cuisine" maxLength="15"></input>
                    <button className="button-edit" type="submit" onClick={editCard}> change card info </button>
                </form>
            </Modal>
        </div>
    )
}
// function editCard() {
//     dispatch(editOneCardThunk(oneCard.id, editCardInfo))
//     closeModal()
// }