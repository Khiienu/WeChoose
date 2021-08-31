//! ACTION 
const GET_DECKS = 'deck/GET_DECKS';
const CREATE_DECK = 'deck/CREATE_DECK';
const EDIT_DECK = 'deck/EDIT_DECK';
const DELETE_DECK = 'deck/DELETE_DECK';

const getAllDecks = decks => ({
    type: GET_DECKS,
    decks
})

const createDeck = deck => ({
    type: CREATE_DECK,
    deck
})

const editOneDeck = deck => ({
    type: EDIT_DECK,
    deck
})

const deleteOneDeck = deck => ({
    type: DELETE_DECK,
    deck
})



//* THUNK FOR GETTING ALL DECKS FROM USER
export const getDecks = () => async(dispatch) => {

    const res = await fetch('/api/decks/decksByUser');
    if(res.ok){
    const allDecks = await res.json();
    dispatch(getAllDecks(allDecks))
    return allDecks
    }
}
//* THUNK FOR CREATING A DECK FOR USER

export const createDeckThunk = payload => async(dispatch) => {
    console.log("THIS IS CREATE PAYLOAD", payload)
    const res = await fetch('/api/decks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if(res.ok){
        const deck= await res.json()
        dispatch(createDeck(deck))
        return deck;
    }else {
        let error = await res.json()
        console.log("ERROR", error)
    }
}


//* THIS IS EDIT THUNK FOR DECK
export const editOneDeckThunk = (id, payload) => async(dispatch) => {
    console.log("EDIT THUNK PAYLOAD AND ID", payload, id)
    const res = await fetch(`/api/decks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    const data = res.json();
    dispatch(editOneDeck(data))
}


//* THIS IS DELETE THUNK FOR DECK 

export const deleteOneDeckThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/decks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if(res.ok){
        const deleteDeck = await res.json();
        dispatch(deleteOneDeck(deleteDeck))
    }
}

//? REDUCER

const initialState = {};
const deckReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DECKS:
            const newState = {}
            action.decks.decks.forEach((deck) => {
                newState[deck.id] = deck
            })
            return newState;
        case EDIT_DECK:
            // return {
            //     ...state,
            //     ...action.deck
            // }
        case CREATE_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck 
            }

        // case CREATE_DECK:
        //     newState = {[action.deck.id]: action.deck, ...state}
        //     return newState;
        case DELETE_DECK:
            const deckToDelete = {...state}
            delete deckToDelete[action.deck.id]
            return deckToDelete;
        default:
            return state;
    }
}

export default deckReducer;