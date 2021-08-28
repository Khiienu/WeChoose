import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { editOneDeckThunk } from '../../store/deck';

export default function EditDeckName(singleDeck) {
    const dispatch = useDispatch();
    const [deckName, setDeckName] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editOneDeckThunk(singleDeck.oneDeck.id, {deckName}))
    }



    return (
        <form onSubmit={onSubmit} className="edit-deck-name">
            <input type="text" value={deckName} onChange={e => setDeckName(e.target.value)}></input>
            <button type="submit"> change name </button>
        </form>
    )
}