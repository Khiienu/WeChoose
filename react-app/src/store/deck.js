//! ACTION 
const GET_DECKS = 'deck/GET_DECKS';
const CREATE_DECK = 'deck/CREATE_DECK'

const getAllDecks = decks => ({
    type: GET_DECKS,
    decks
})

const createDeck = deck => ({
    type: CREATE_DECK,
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
        case CREATE_DECK:
            const newDeck = {
                ...state,
            }
            newDeck[action.deck.id] = action.deck 
            return newDeck
        default:
            return state;
    }
}

export default deckReducer;