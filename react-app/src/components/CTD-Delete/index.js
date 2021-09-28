import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { deleteCFD } from '../../store/deck';

export default function DeleteOneCardFromDeck({card, oneDeck}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteCFD(card.id, oneDeck.id));
        // <Redirect to="/decks"/>
        history.push(`/decks/${oneDeck.id}`)
        window.location.replace(`/decks/${oneDeck.id}`) //* THIS IS TO SEE IT WORK 
    }

    return (
        <div className="deletebutton">
            <button type='button' onClick={deleteClick}>delete</button>
        </div>
    )
}