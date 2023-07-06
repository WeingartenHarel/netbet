import  listService  from '../../service/listService'

// Action Dispatcher
export function loadCards(page) {
  return async dispatch => {
    const cards = await listService.loadList(page)
    console.log('loadCards card',page,cards)
    dispatch({ type: 'SET_CARDS', cards })
  }
}  
