import { useEffect,useState} from 'react'
import { useParams} from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getDeckThunk } from '../../store/deck';
import EditDeckName from '../Deck-Update';
import DeleteOneDeck from '../Deck-Delete';
import DeleteOneCardFromDeck from '../CTD-Delete';
import { getDecks } from '../../store/deck';
import { getCardsThunk } from '../../store/card';
import { Link } from "react-router-dom";
import './index.css'

// import ReactDom from 'react-dom';
import Modal from 'react-modal';
Modal.setAppElement("#root")
export default function SingleDeck() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    function openModal(){
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false)
    }
    // const sessionUser = useSelector((state) => state.session.user);
    const decks = useSelector((state) =>  Object.values(state.decks))
    const oneDeck = decks.find(deck => deck.id === +id)


    const cardtoChoose = oneDeck?.userCards[Math.floor(Math.random() * oneDeck.userCards.length)]
    // console.log(cardtoChoose.name)



    useEffect(() => {
        dispatch(getDeckThunk(id))
        dispatch(getDecks())
        dispatch(getCardsThunk())
    }, [dispatch, id])

    return (
        <>
            <div className="deck-info">
                <h1 className="deck-name">{oneDeck?.deckName}</h1>
                <button className="button-card" onClick={openModal}>WE CHOOSE FOR YOU</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                    <h1 className="deck-chose"> We choose this==>
                    {cardtoChoose?.name} </h1>
                    </Modal>
                <EditDeckName oneDeck={oneDeck}/>
                <DeleteOneDeck oneDeck={oneDeck}/>
            </div>
        <div className="deck">
            <div className="page">
                <div className="card-case">
                    {oneDeck?.userCards?.map(card => (
                        <div>   
                            <Link key={card.id} to={`/cards/${card.id}`}
                                className="indiv-card">
                                <div className="solo-card">
                                    <h1 className="cardname">{card.name}</h1>
                                </div>
                            <DeleteOneCardFromDeck card={card} oneDeck={oneDeck}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}