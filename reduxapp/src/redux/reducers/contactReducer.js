export default function contactReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload]

        case 'REMOVE_CONTACT':
            let contacts = state.filter(contact => contact.email !== action.payload);
            return contacts

        case 'CLEAR_CONTACTS':
            return []

        default:
            return state;
    }
}

// @INIT by redux

// in case of react we initialize state in useReducer() hook
// useReducer(reducerFn, intialState)