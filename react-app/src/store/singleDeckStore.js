const GET_DECK = 'deck/GET_DECK'

const getOneDeck = (deck) => {
    return {
        type: GET_DECK,
        deck
    }
}

export const getDeckThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/decks/${id}`)
    if(res.ok){
        const singleDeck = await res.json()
        dispatch(getOneDeck(singleDeck))
    }
}

const initialState = {};

const singleDeckReducer = (state = initialState, action ) => {
    let newState = {};

    switch(action.type) {
        case GET_DECK:
            const oneDeck = action.deck
            return oneDeck

        default:
            return state
    }
}

export default singleDeckReducer;