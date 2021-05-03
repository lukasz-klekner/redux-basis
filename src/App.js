import { createStore, combineReducers, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';


const initialMovies = {
  listName : 'favourite',
  list: [
    'Titcanic', 'Dijango', 'Rambo'
  ]
}

const initialActors = {
  listName : 'best',
  list: [
    'DiCaprio', 'De Niro', 'Hopkins', 'Al Pacino', 'Hanks'
  ]
}

function movies(state = initialMovies, action) {
  switch(action.type){
    case 'RESET_MOVIES':
      return {
        ...state, list: [],
      }

    case 'ADD_MOVIES':
      return {
        ...state, list: [...state.list, action.movie]
      }

    default:
    return state;
  }
}

function actors(state=initialActors, action){
  switch(action.type){
    case 'RESET_ACTORS':
      return {
        ...state, list: []
      }
    case 'ADD_ACTORS':
      return {
        ...state, list: [...state.list, action.person]
      }

    default:
      return state;
  }
}

const allReducers = combineReducers({movies, actors});

const store = createStore(allReducers, composeWithDevTools());

window.store = store;

const addMovie = movie => ({
  type: 'ADD_MOVIES',
  movie
})

const resetMovies = () => ({
  type: 'RESET_MOVIES',
})

const movieActions = bindActionCreators({add : addMovie, reset: resetMovies}, store.dispatch);

movieActions.add('Szybcy i Wsciekli');
//movieActions.reset();

const addActor = person => ({
  type: 'ADD_ACTORS',
  person
})

const resetActors = () => ({
  type: 'RESET_ACTORS',
})

const actorsActions = bindActionCreators({ add: addActor, reset: resetActors}, store.dispatch);
actorsActions.add('Pitt');
// actorsActions.reset();


// store.getState()
// store.dispatch({type: "RESET"})
// store.dispatch({type: "ADD", movie: 'Szybcy i Wsciekli'})

function App() {
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
