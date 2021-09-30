import { useEffect} from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleCardThunk } from '../../store/card'
import { getDecks } from '../../store/deck'
import { getCardsThunk } from '../../store/card'
import EditCard from '../Card-Update'
import DeleteOneCard from '../Card-Delete'
import AddToDeck from '../CTD-Add'
import './index.css'

export default function SingleCard() {
    const {id} = useParams();
    const dispatch = useDispatch();

    // const sessionUser= useSelector((state) => state.session.user);
    const cards = useSelector((state) => Object.values(state.cards))
    const oneCard =  cards.find(card=> card.id === +id)
    useEffect(() => {
        dispatch(getSingleCardThunk(id))
        dispatch(getDecks())
        dispatch(getCardsThunk())
    }, [dispatch,id])

    return (
        <div className="card">
            <div className="info">
                <h1 className="Heading">Restaurant: {oneCard?.name}</h1>
            </div>
            <div className="info">
                <h1 className="Heading">Description: {oneCard?.description}</h1>
            </div>
            <div className="info">
                <h1 className="Heading">Type of cuisine: {oneCard?.typeofcuisine}</h1>
            </div>
            <AddToDeck oneCard={oneCard}/>
            <EditCard oneCard={oneCard}/>
            <DeleteOneCard oneCard={oneCard}/>
        </div>
    )
}