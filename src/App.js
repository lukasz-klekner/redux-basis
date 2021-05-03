import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'

import { actorsActions } from './app/actors/duck'
import { moviesActions } from './app/movies/duck'

const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch(actorsActions.add('Brad Pitt'));
store.dispatch(moviesActions.add('The Intern'));

function App() {
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
