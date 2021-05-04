import { useSelector } from 'react-redux'

const MoviesContainer = (props) =>  {

    const movies = useSelector(state => state.movies);

    return (
    <ul>
        {movies.list.map((movie, index) => <li key={index}>{movie}</li>)}
    </ul>
    )
}

export default MoviesContainer;