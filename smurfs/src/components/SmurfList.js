import React from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';


const SmurfList = props => {
    console.log("smurf list props ",props);

    return(
        <div>
            <button onClick={props.fetchSmurfs}>Get Smurfs</button>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
                <p>{props.height}</p>
            </div>
        </div>
    )


}

const mapStateToProps = state => {
    return{
        name: state.name,
        age: state.age,
        height: state.height
    };
};

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfList);