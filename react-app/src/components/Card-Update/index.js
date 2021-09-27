import {useEffect, useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { editOneCardThunk } from '../../store/card';

export default function EditCard({oneCard}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [typeofcuisine, setTypeOfCuisine] = useState('')
    const sessionUser = useSelector((state) => state.session.user)
    const cards = useSelector((state) => Object.values(state.cards))

    const onEditSubmit = (e) => {
        e.preventDefault();
        const editCardInfo = {
            name: name,
            description: description,
            typeofcuisine: typeofcuisine
        }
        dispatch(editOneCardThunk(oneCard.id, editCardInfo))
        console.log(editCardInfo, "THIS IS editCardInfo ))))")
        setName('');
        setDescription('');
        setTypeOfCuisine('');
    }
    return (
        <form onSubmit={onEditSubmit} className="edit-deck-name">
            <div className="headers">
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Change name"></input>
            </div>
            <div className="headers">
            <input type="text" onChange={e => setDescription(e.target.value)} placeholder="Change Description"></input>
            </div>
            <div className="headers">
            <input type="text" onChange={e => setTypeOfCuisine(e.target.value)} placeholder="Change type of cuisine"></input>
            </div>
            <button type="submit"> change name </button>
        </form>
    )
}