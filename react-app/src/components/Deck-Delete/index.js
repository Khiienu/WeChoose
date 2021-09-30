// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { deleteOneDeckThunk } from '../../store/deck';

export default function DeleteOneDeck({oneDeck}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteOneDeckThunk(oneDeck.id));
        // <Redirect to="/decks"/>
        history.push('/decks')
        window.location.replace('/decks') //* THIS IS TO SEE IT WORK 
    }

    return (
        <div className="button-deck">
            <button className="button-deck" type='button' onClick={deleteClick}>delete</button>
        </div>
    )
}
//! USE useEffect 