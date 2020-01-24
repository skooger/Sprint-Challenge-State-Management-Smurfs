import React from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions';
import Smurf from './Smurf';


const SmurfList = props => {
    console.log("smurf list props ",props);

    return(
        <div>
            <button className="get-btn" onClick={props.fetchSmurfs}>Get Smurfs</button>
            <div className="smurf-container">
            {
                props.smurfList.map(smurf => (
                    <Smurf name={smurf.name} age={smurf.age} height={smurf.height}></Smurf>
                ))
            }
                
            </div>
        </div>
    )


}

const mapStateToProps = state => {
    return{
        smurfList: state.smurfList
    };
};

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfList);