import types from './types'

const INITIAL_STATE = {
    listName : 'best',
    list: [
      'DiCaprio', 'De Niro', 'Hopkins', 'Al Pacino', 'Hanks'
    ]
  }

const actorsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
      case types.RESET_ACTORS:
        return {
          ...state, list: []
        }
      case types.ADD_ACTORS:
        return {
          ...state, list: [...state.list, action.person]
        }

      default:
        return state;
    }
  }

export default actorsReducer;