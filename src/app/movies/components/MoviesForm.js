import React from 'react';
import { connect } from 'react-redux';

import actions from '../duck/actions';

const MoviesForm = ({ add }) => {

    const movieInput = React.createRef();

    const addMovie = e => {
        e.preventDefault();
        add(movieInput.current.value);
        movieInput.current.value='';
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" ref={movieInput}/>
            <button>Add movie</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
})

export default connect(null, mapDispatchToProps)(MoviesForm);