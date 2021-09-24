import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCardThunk } from "../../store/card";

export default function CardCreator() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [typeofcuisine, setTypeOfCuisine] = useState('')
    const sessionUser = useSelector((state) => state.session.user)


    const onCreateSubmit = (e) => {
        e.preventDefault();
    const createCard = {
        userId: sessionUser.id,
        name: name,
        description: description,
        typeofcuisine: typeofcuisine
    }
    dispatch(createCardThunk(createCard))
    }
    return (
        <>
            <form onSubmit={onCreateSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Restuarant Name"/>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description of restuarant"/>
                <input type="text" value={typeofcuisine} onChange={e =>setTypeOfCuisine(e.target.value)} placeholder="What's the type of cuisine?"/>

                <button className="newCard" onClick={(e) => {
                    setName('');
                    setDescription('');
                    setTypeOfCuisine('');
                    onCreateSubmit(e)
                }}>New Card</button>
            </form>

        </>
    )
}