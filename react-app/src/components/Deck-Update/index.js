import {useEffect, useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editOneDeckThunk } from '../../store/deck';

export default function EditDeckName({oneDeck}) {
    const dispatch = useDispatch();
    const [deckName, setDeckName] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(editOneDeckThunk(oneDeck.id, {userId: sessionUser.id ,deckName: deckName}))
    }

    console.log("THIS IS ONEDECK DOT ID",oneDeck.id)
    return (
        <form onSubmit={onSubmit} className="edit-deck-name">
            <input type="text" value={deckName} onChange={e => setDeckName(e.target.value)}></input>
            <button type="submit"> change name </button>
        </form>
    )
}