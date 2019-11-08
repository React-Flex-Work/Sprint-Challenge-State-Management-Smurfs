import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameChangeHandler = event => {
        setName(event.target.value);
    };

    const ageChangeHandler = event => {
        setAge(event.target.value);
    };

    const heightChangeHandler = event => {
        setHeight(event.target.value);
    };

    const submitHandler = event => {
        let newSmurf = {
            name: name,
            age: age,
            height: height
        }
        props.addSmurf(newSmurf)
    };

    return (
        <div className="smurf-form">
            <form onSubmit={submitHandler}>
                <input
                    value={name}
                    placeholder="Smurf Name"
                    onChange={nameChangeHandler} />
                <input
                    value={age}
                    placeholder="Smurf Age"
                    onChange={ageChangeHandler} />
                <input
                    value={height}
                    placeholder="Smurf Height"
                    onChange={heightChangeHandler} />
                <button>Smurf a New Smurf</button>
            </form>
        </div>
    );
}

export default connect(null, { addSmurf })(SmurfForm);