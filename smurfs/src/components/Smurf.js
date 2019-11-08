import React from 'react';

const Smurf = props => {
    console.log(props);
    return (
        <div className="smurf">
            <h2>{props.name}</h2>
            <div className="smurf-info">
                <p>Smurf Age: {props.age}</p>
                <p>Smurf Height: {props.height}</p>
            </div>
        </div>
    )
}

export default Smurf;