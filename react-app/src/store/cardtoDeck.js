const ADD_CARD_TO_DECK = 'cardToDeck/ADD_CARD_TO_DECK';
const DELETE_CARD_FROM_DECK = 'cardToDeck/DELETE_CARD_FROM_DECK';

const addCardtoDeck = ctd => ({
    type: ADD_CARD_TO_DECK,
    ctd
})

const deleteCardFromDeck = ctd => ({
    type: DELETE_CARD_FROM_DECK,
    ctd
})

//* THIS IS ADD THUNK 

export const addCTD = (cardId, deckId) => async(dispatch) => {
    console.log(cardId, deckId,"FROM STORE")
    const res =  await fetch(`/api/cardToDeck`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cardId: cardId, deckId: deckId})
    })
    const data = await res.json();
    dispatch(addCardtoDeck(data));
    return data;
}

//* THIS IS DELETE THUNK
export const deleteCFD = (cardId, deckId) => async(dispatch) => {
    const res = await fetch(`/api/cardToDeck`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({cardId: cardId, deckId: deckId})
    })
    if(res.ok) {
        const deleteCard = await res.json()
        dispatch(deleteCardFromDeck(deleteCard))
    }

}

//? REDUCER

const initialState = {};
const cardToDeckReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CARD_TO_DECK:
           return { ...state, [action.ctd.id]: action.ctd}
        case DELETE_CARD_FROM_DECK:
            const cardToDeleteFromDeck = {...state}
            delete cardToDeleteFromDeck[action.ctd.id]
            return cardToDeleteFromDeck;
        default:
            return state;
    }
}
export default cardToDeckReducer;