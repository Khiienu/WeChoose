import { useEffect} from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getDeckThunk } from '../../store/deck';
import EditDeckName from '../Deck-Update';
import DeleteOneDeck from '../Deck-Delete';
import DeleteOneCardFromDeck from '../CTD-Delete';
export default function SingleDeck() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector((state) =>  Object.values(state.decks))
    const oneDeck = decks.find(deck => deck.id === +id)
    useEffect(() => {
        dispatch(getDeckThunk(id))
    }, [dispatch, id])

    return (
        <div className="deck">
            <h1>
                {oneDeck?.deckName}
                {oneDeck?.userCards?.map(card => (
                        <>   
                            <h2>{card.name}</h2>
                            <DeleteOneCardFromDeck card={card} oneDeck={oneDeck}/>
                        </>
                ))}
            </h1>
            <EditDeckName oneDeck={oneDeck}/>
            <DeleteOneDeck oneDeck={oneDeck}/>
        </div>
    )
}