import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../duck/actions';

const MoviesForm = () => {

    const dispatch = useDispatch();
    const movieInput = React.createRef();

    const addMovie = e => {
        e.preventDefault();
        dispatch(actions.add(movieInput.current.value));
        movieInput.current.value='';
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" ref={movieInput}/>
            <button>Add movie</button>
        </form>
    )
}

export default MoviesForm;