import React, { useState} from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions';

const SmurfForm = props => {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [height,setHeight] = useState('');
    const [id,setId] = useState('');

    const handleNameChanges = e => {
        setName(e.target.value);
    }

    const handleAgeChanges = e => {
        setAge(e.target.value);
    }

    const handleHeightChanges = e => {
        setHeight(e.target.value);
    }

    const handleIdChanges = e => {
        setId(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurfs(name,age,height,id)
        setName('');
        setAge('');
        setHeight('');
        setId('');
    }


    return(
        <div>
            <form onSubmit={handleSubmit} id="smurf-form">
        
                <input 
                    type="text"
                    name="Name"
                    value={name}
                    onChange={handleNameChanges}
                    className="feedback-input"
                    placeholder="Name"
                />
                <input 
                    type="text"
                    name="Age"
                    value={age}
                    onChange={handleAgeChanges}
                    className="feedback-input"
                    placeholder="Age"
                />
                <input 
                    type="text"
                    name="Height"
                    value={height}
                    onChange={handleHeightChanges}
                    className="feedback-input"
                    placeholder="Height"
                />
                <input 
                    type="text"
                    name="ID"
                    value={id}
                    onChange={handleIdChanges}
                    className="feedback-input"
                    placeholder="ID"
                />
                <button className="add-btn">Add Smurf</button>
            </form>
            
        </div>
    )


}

const mapStateToProps = state => {
    return{

    };
};

export default connect(
    mapStateToProps,
    {addSmurfs}
)(SmurfForm);