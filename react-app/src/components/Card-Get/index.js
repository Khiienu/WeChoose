import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCardsThunk } from "../../store/card";
import { Link } from "react-router-dom";
import CardCreator from "../Card-Add";

export default function GetCard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const cards = useSelector(state => Object.values(state.cards))

    useEffect(()=> {
        dispatch(getCardsThunk())
    }, [dispatch])

    return (
        <div className="card-case">
            {cards.map((card) => (
                <Link key={card.id} to={`/cards/${card.id}`}
                className="indiv-card">
                <h1 className="cardName">{card.name}</h1>
                </Link>
            ))}
            <CardCreator/>
        </div>
    )
}