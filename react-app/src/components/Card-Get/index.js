import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCardsThunk } from "../../store/card";
import { Link } from "react-router-dom";
import CardCreator from "../Card-Add";
import { getDecks } from "../../store/deck";
import './index.css'
export default function GetCard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const cards = useSelector(state => Object.values(state.cards))

    useEffect(()=> {
        dispatch(getDecks())
        dispatch(getCardsThunk())
    }, [dispatch])

    return (
        <div className="page">
            <div className="card-case">
                <div className="solo-card-2">
                    <CardCreator/>
                </div>
                {cards.map((card) => (
                    <Link key={card.id} to={`/cards/${card.id}`}
                        className="indiv-card">
                        <div className="solo-card">
                            <h1 className="cardname">{card.name}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}