import types from './types';

const INITIAL_STATE = {
    listName : 'favourite',
    list: [
      'Titcanic', 'Dijango', 'Rambo'
    ]
  }

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case types.RESET_MOVIES:
        return {
          ...state, list: [],
        }

      case types.ADD_MOVIES:
        return {
          ...state, list: [...state.list, action.movie]
        }

      default:
      return state;
    }
  }

  export default moviesReducer;