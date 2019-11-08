import React from 'react';

const Smurf = props => {
    console.log(props);
    return (
        <div className="smurf">
            <h2>{props.smurf.name}</h2>
            <div className="smurf-info">
                <p>{props.smurf.age}</p>
                <p>{props.smurf.height}</p>
            </div>
        </div>
    )
}

export default Smurf;