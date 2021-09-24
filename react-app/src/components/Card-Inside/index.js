import { useEffect, useState } from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { deleteoneCardThunk, getSingleCardThunk } from '../../store/card'
import EditCard from '../Card-Update'
import DeleteOneCard from '../Card-Delete'

export default function SingleCard() {
    const {id} = useParams();
    const dispatch = useDispatch();

    const sessionUser= useSelector((state) => state.session.user);
    const cards = useSelector((state) => Object.values(state.cards))
    const oneCard =  cards.find(card=> card.id === +id)
    console.log(cards, "THIS IS oneCArd in card-inside ******")
    useEffect(() => {
        dispatch(getSingleCardThunk(id))
    }, [dispatch])

    return (
        <div className="deck">
        <h1>
            {oneCard?.name}
        </h1>
        <EditCard oneCard={oneCard}/>
        <DeleteOneCard oneCard={oneCard}/>
    </div>
    )
}