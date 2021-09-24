import { useDispatch } from "react-redux";
import { deleteoneCardThunk } from "../../store/card";

export default function DeleteOneCard({oneCard}) {
    const dispatch = useDispatch();
    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(deleteoneCardThunk(oneCard.id));
        window.location.replace('/cards')
    }

    return (
        <div className="deletebutton">
            <button type='button' onClick={deleteClick}>delete</button>
        </div>
    )
}