import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURFY } from '../actions';

const initialState = {
    getSmurf: [],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                getSmurf: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case ADD_SMURFY:
            const newSmurf = {
                name: action.payload,
                age: action.payload,
                height: action.payload,
            };
            return {
                ...state,
                initialState: [...state.initialState, newSmurf]
            };
        default:
            return state;
    };
}

export default reducer;