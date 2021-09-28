import {useEffect, useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editOneDeckThunk } from '../../store/deck';

export default function EditDeckName({oneDeck}) {
    const dispatch = useDispatch();
    const [deckNames, setDeckNames] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector((state) => Object.values(state.decks))
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(editOneDeckThunk(oneDeck.id, {deckName: deckName}))
    // }
    
    const onSubmit = (e) => {
        e.preventDefault();
        const editInfo = {
            deckName: deckNames
        }
        dispatch(editOneDeckThunk(oneDeck.id, editInfo))
        setDeckNames("")
    }
    return (
        <form onSubmit={onSubmit} className="edit-deck-name">
            <input type="text" onChange={e => setDeckNames(e.target.value)}></input>
            <button type="submit"> change name </button>
        </form>
    )
}