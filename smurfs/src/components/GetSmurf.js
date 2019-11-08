import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

import { fetchSmurf } from '../actions';

const GetSmurf = props => {
    useEffect(() => {
        props.fetchSmurf();
    }, []);
    if (props.isFetching) {
        return <h2>Smurfing your Smurf...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.getSmurf.map(smurf =>
                <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        getSmurf: state.getSmurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf }
)(GetSmurf);