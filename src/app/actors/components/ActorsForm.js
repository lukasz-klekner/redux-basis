import React from 'react';
import { useDispatch } from 'react-redux';
import  actions  from '../duck/actions'

const ActorsForm = () => {

    const dispatch = useDispatch();
    const actorInput = React.createRef();

    const addActor = e => {
        e.preventDefault();
        dispatch(actions.add(actorInput.current.value));
        actorInput.current.value = '';

    }

    return (
        <form action="" onSubmit={addActor}>
            <input type="text" ref={actorInput} />
            <button>Add actor</button>
        </form>
    )
}

export default ActorsForm;
