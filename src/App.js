import MoviesContainer from './app/movies/components/MoviesContainer';
import ActorsContainer from './app/actors/components/ActorsContainer';
import MoviesForm from './app/movies/components/MoviesForm';

function App() {
  return (
    <div className="App">
      <h2>Filmy:</h2>
      <MoviesContainer />
      <MoviesForm />

      <h2>Aktorzy:</h2>
      <ActorsContainer />
    </div>
  );
}

export default App;
