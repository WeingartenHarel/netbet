const INITIAL_STATE = {
  cards:[],
} 
export function cardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.cards
      }
    case 'SET_card':
      return {
        ...state,
        card: action.card
      }
    case 'REMOVE_card':
      return {
        ...state,
        card: state.card.filter(contact => contact._id !== action.contactId)
      }
    case 'ADD_card':
      return {
        ...state,
        card: [...state.card, action.contact]
      }
    case 'UPDATE_card':
      return {
        ...state,
        card: state.card.map(contact => contact._id === action.contact._id ? action.contact : contact)
      }
    default:
      return state
  }
}