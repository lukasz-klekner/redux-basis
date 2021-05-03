import types from './types';

const add = person => ({
    type: types.ADD_ACTORS, person
  })

const reset = () => ({
    type: types.RESET_ACTORS,
  })

export default {
    add,
    reset
}