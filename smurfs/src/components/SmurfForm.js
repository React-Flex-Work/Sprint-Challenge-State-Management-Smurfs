import React, { useState } from 'react';
import axios from 'axios';
import { FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const SmurfForm = () => {
    const [smurfy, setSmurfy] = useState('');

    const changeHandler = event => {
        setSmurfy(event.target.value);
    };

    const handleSubmit = () => dispatch => {
        dispatch({ type: 'ADD_SMURFY' })
        axios
            .post('http://localhost:3333/smurfs')
            .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
    };

    return (
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <input
                    value={smurfy.name}
                    placeholder="Smurf Name"
                    onChange={changeHandler} />
                <input
                    value={smurfy.age}
                    placeholder="Smurf Age"
                    onChange={changeHandler} />
                <input
                    value={smurfy.height}
                    placeholder="Smurf Height"
                    onChange={changeHandler} />
                <button>Smurf a New Smurf</button>
            </form>
        </div>
    );
}

export default SmurfForm;