import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneDeckThunk } from '../../store/deck';

export default function DeleteOneDeck({oneDeck}) {
    const dispatch = useDispatch();
    
    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteOneDeckThunk(oneDeck.id))
        window.location.reload()
    }

    return (
        <div className="deletebutton">
            <button type='button' onClick={deleteClick}>delete</button>
        </div>
    )
}