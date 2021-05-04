import React from 'react';
import { connect } from 'react-redux';
import  actions  from '../duck/actions'

const ActorsForm = ({ add }) => {

    const actorInput = React.createRef();

    const addActor = e => {
        e.preventDefault();
        add(actorInput.current.value);
        actorInput.current.value = '';

    }

    return (
        <form action="" onSubmit={addActor}>
            <input type="text" ref={actorInput} />
            <button>Add actor</button>
        </form>
    )
}

    const mapDispatchToProps = dispatch => ({
        add: actor => dispatch(actions.add(actor))
    })

    export default connect(null, mapDispatchToProps)(ActorsForm);
