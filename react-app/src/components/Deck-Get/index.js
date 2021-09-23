import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getDecks } from "../../store/deck";
import { Link } from 'react-router-dom';
import DeckCreator from "../Deck-Add";
import './demo-get.css'
export default function GetDeck() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector(state => Object.values(state.decks))

    useEffect(() => {
        dispatch(getDecks())
    }, [dispatch])
    
    return (
        <div className="page">
            <div className="deck-cases">
                {decks.map((deck) => (
                    <Link key={deck.id} to={`/decks/${deck.id}`} className="indiv-deck">
                    <h1 className="deckName">{deck.deckName}</h1>
                    </Link>
                ))}
                <DeckCreator />
            </div>
        </div>
    )

}