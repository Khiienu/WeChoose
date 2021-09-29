import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeckThunk } from '../../store/deck';
import './index.css'
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
            <div className="create-form">
            <h1 className="title">CREATE A DECK</h1>
                <form onSubmit={onCreateSubmit}>
                <div className="form-1">
                    <label className="form-2">Name for Deck</label>
                    <input className="form-inputs" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="New Deck Name" />
                </div>
                <div className="form-1">
                    <button className="newDeck" onClick={(e) => {
                        setName('')
                        onCreateSubmit(e)}
                        }>Create deck</button>
                </div>
                </form>
            </div>
        </>
    )
    
}
