import { useEffect} from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getDeckThunk } from '../../store/deck';
import EditDeckName from '../Deck-Update';
import DeleteOneDeck from '../Deck-Delete';
import DeleteOneCardFromDeck from '../CTD-Delete';
import { getDecks } from '../../store/deck';
import { getCardsThunk } from '../../store/card';
import { Link } from "react-router-dom";
import './index.css'
export default function SingleDeck() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector((state) =>  Object.values(state.decks))
    const oneDeck = decks.find(deck => deck.id === +id)
    useEffect(() => {
        dispatch(getDeckThunk(id))
        dispatch(getDecks())
        dispatch(getCardsThunk())
    }, [dispatch, id])

    return (
        <>
            <div className="deck-info">
                <h1 className="deck-name">{oneDeck?.deckName}</h1>
                <EditDeckName oneDeck={oneDeck}/>
                <DeleteOneDeck oneDeck={oneDeck}/>
            </div>
        <div className="deck">
            <div className="page">
                <div className="card-case">
                    {oneDeck?.userCards?.map(card => (
                        <div>   
                            <Link key={card.id} to={`/cards/${card.id}`}
                                className="indiv-card">
                                <div className="solo-card">
                                    <h1 className="cardname">{card.name}</h1>
                                </div>
                            </Link>
                            <DeleteOneCardFromDeck card={card} oneDeck={oneDeck}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}