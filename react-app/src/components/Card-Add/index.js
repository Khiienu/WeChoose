import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCardThunk } from "../../store/card";
import './index.css'
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
        <h1 className="title">CREATE A CARD</h1>
        <div className="create-form">
            <form onSubmit={onCreateSubmit}>
                <div className="form-1">
                    <label className="form-2">Name of restuarant</label>
                    <input className="form-inputs" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Restuarant Name"/>
                </div>
                <div className="form-1">
                    <label className="form-2">Description of restuarant</label>
                    <input className="form-inputs" type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description of restuarant"/>
                </div>
                <div className="form-1">
                    <label className="form-2">What is the type of cuisine?</label>
                    <input className="form-inputs" type="text" value={typeofcuisine} onChange={e =>setTypeOfCuisine(e.target.value)} placeholder="What's the type of cuisine?"/>
                </div>
                <div className="form-1">
                    <button className="newCard" onClick={(e) => {
                        setName('');
                        setDescription('');
                        setTypeOfCuisine('');
                        onCreateSubmit(e)
                    }}>New Card</button>
                </div>
            </form>
        </div>
        </>
    )
}