import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { editOneDeckThunk } from '../../store/deck';

export default function EditDeckName({oneDeck}) {
    const dispatch = useDispatch();
    const [deckName, setDeckName] = useState("")
    
    const onSubmit = (e) => {
        console.log("THIS IS EDIT SINGLEDECK DESTRUCTORED", oneDeck)
        e.preventDefault();
        dispatch(editOneDeckThunk(oneDeck.id, {deckName}))
    }



    return (
        <form onSubmit={onSubmit} className="edit-deck-name">
            <input type="text" value={deckName} onChange={e => setDeckName(e.target.value)}></input>
            <button type="submit"> change name </button>
        </form>
    )
}