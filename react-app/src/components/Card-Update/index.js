import {useEffect, useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editOneCardThunk } from '../../store/card';
import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';


export default function EditCard({oneCard}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [typeofcuisine, setTypeOfCuisine] = useState('')
    const sessionUser = useSelector((state) => state.session.user)
    const cards = useSelector((state) => Object.values(state.cards))
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


    const onEditSubmit = (e) => {
        e.preventDefault();
        const editCardInfo = {
            name: name,
            description: description,
            typeofcuisine: typeofcuisine
        }
        dispatch(editOneCardThunk(oneCard.id, editCardInfo))
        setName('');
        setDescription('');
        setTypeOfCuisine('');
    }
    return (
        <div>
            <button onClick={openModal}>Edit card details</button>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            > 
                <form onSubmit={onEditSubmit} className="edit-deck-name">
                    <div className="headers">
                    <input type="text" onChange={e => setName(e.target.value)} placeholder="Change name"></input>
                    </div>
                    <div className="headers">
                    <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Change Description"></input>
                    </div>
                    <div className="headers">
                    <input type="text" onChange={e => setTypeOfCuisine(e.target.value)} placeholder="Change type of cuisine"></input>
                    </div>
                    <button type="submit"> change card info </button>
                </form>
            </Modal>
        </div>
    )
}