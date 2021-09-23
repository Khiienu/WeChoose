const GET_CARDS = 'card/GET_CARDS';
const CREATE_CARD = 'card/CREATE_CARD';
const EDIT_CARD = 'card/EDIT_CARD';
const DELETE_CARD = 'card/DELETE_CARD';

const getAllCards = cards => ({
    type: GET_CARDS,
    cards
})

const createCard = card => ({
    type: CREATE_CARD,
    card
})

const editOneCard = card => ({
    type: EDIT_CARD,
    card
})

const deleteOneCard = card => ({
    type: DELETE_CARD,
    card
})

//* THUNK FOR GETTING ALL CARDS FROM USER
export const getCardsThunk = () => async(dispatch) => {
    const res = await fetch('/api/cards/cardsByUser');
    if(res.ok) {
        const allCards =  await res.json();
        dispatch(getAllCards(allCards))
        return allCards;
    }
} 

//* THUNK FOR CREATING A CARD FOR USER
export const createCardThunk = () => async(dispatch) => {
    const res = await fetch('/api/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if(res.ok){
        const card = await res.json()
        dispatch(createCard(card))
        return card;
    }
    else {
        let error = await res.json()
        console.log("ERROR", error)
    }
}

//* THUNK FOR EDIT FROM USER
export const editOneCardThunk = (id, payload) => async(dispatch) => {
    const res = await fetch(`/api/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    const data = res.json();
    dispatch(editOneCard(data))
}

//* THUNK FOR DELETING CARD 
export const deleteoneCardThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(res.ok){
        const deleteCard = await res.json();
        dispatch(deleteOneCard(deleteCard))
    }
}

//? REDUCER FOR CARD 

const initialState = {};
const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CARDS:
            const newState = {}
            action.cards.cards.forEach((card) => {
                newState[card.id] = card
            })
            return newState;
        case EDIT_CARD:
            co









    }
}