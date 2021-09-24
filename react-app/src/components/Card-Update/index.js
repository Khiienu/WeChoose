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
            <input type="text" onChange={e => setName(e.target.value)}></input>
            <button type="submit"> change name </button>
        </form>
    )
}