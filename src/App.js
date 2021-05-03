import { createStore } from 'redux';

import './App.css';


const initialMovies = {
  listName : 'favourite',
  movies: [
    'Titcanic', 'Dijango', 'Rambo'
  ]
}

function movies(state = initialMovies, action) {
  switch(action.type){
    case 'RESET':
      return {
        ...state, movies: [],
      }

    case 'ADD':
      return {
        ...state, movies: [...state.movies, action.movie]
      }

    default:
    return state;
  }
}

const store = createStore(movies);

window.store = store;

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
