import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
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
        <div className="deletebutton">
            <button type='button' onClick={deleteClick}>delete</button>
        </div>
    )
}
//! USE useEffect 