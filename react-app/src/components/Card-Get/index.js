import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCardsThunk } from "../../store/card";
import { Link } from "react-router-dom";


export default function GetCard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const cards = useSelector(state => Object.values(state.cards))

    useEffect(()=> {
        dispatch(getCardsThunk())
    }, [dispatch])
    console.log(cards, "THIS IS CARDS")
    

    return (
        <div className="card-case">
            {cards.map((card) => (
                <h1>{card.name}</h1>
            ))}
        </div>
    )
}