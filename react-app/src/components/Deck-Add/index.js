import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeckThunk } from '../../store/deck';

export default function DeckCreator() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const sessionUser = useSelector((state) => state.session.user)

    
    
    const onCreateSubmit = (e) => {
        e.preventDefault();
    const createDeck = {
        userId: sessionUser.id,
        deckName: name
    }
    dispatch(createDeckThunk(createDeck))
    }

    return (
        <>
            <form onCreateSubmit={onCreateSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="New Deck Name" />    
                <button className="newDeck" onClick={(e) => {
                    setName('')
                    onCreateSubmit(e)}
                    }> NEW DECK </button>
            </form>
        </>
    )
    
}
