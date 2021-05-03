import MoviesContainer from './app/movies/components/MoviesContainer';
import ActorsContainer from './app/actors/components/ActorsContainer';

function App() {
  return (
    <div className="App">
      <h2>Filmy:</h2>
      <MoviesContainer />

      <h2>Aktorzy:</h2>
      <ActorsContainer />
    </div>
  );
}

export default App;
