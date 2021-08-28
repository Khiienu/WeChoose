import { useEffect, useState } from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getDeckThunk } from '../../store/singleDeckStore';
import EditDeckName from '../Deck-Update';
import DeleteOneDeck from '../Deck-Delete';
export default function SingleDeck() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const oneDeck = useSelector((state) =>  state.singleDeck)

    console.log("THIS IS oneDeck", oneDeck)
    useEffect(async() => {
        await dispatch(getDeckThunk(id))
    }, [dispatch])

    return (
        <div className="deck">
            <h1>
                {oneDeck.deckName}
                {oneDeck.userCards?.map(ele => {
                    return (
                        <>
                            <h2>{ele.name}</h2>
                        </>
                    )
                })}
            </h1>
            <EditDeckName oneDeck={oneDeck}/>
            <DeleteOneDeck oneDeck={oneDeck}/>
        </div>
    )
}