import { useEffect} from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleCardThunk } from '../../store/card'
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
    }, [dispatch,id])

    return (
        <div className="deck">
            <div className="info">
                <label className="card-info">{oneCard?.name}</label>
            </div>
            <div className="info">
                <label className="card-info">{oneCard?.description}</label>
            </div>
            <div className="info">
                <label className="card-info">{oneCard?.typeofcuisine}</label>
            </div>
            <AddToDeck oneCard={oneCard}/>
            <EditCard oneCard={oneCard}/>
            <DeleteOneCard oneCard={oneCard}/>

        </div>
    )
}