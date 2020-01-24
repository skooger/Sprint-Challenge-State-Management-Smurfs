import {
    FETCHING_SMURFS_SUCCESS,
    ADDING_SMURFS_SUCCESS
  } from '../actions';

const initialState = {

    smurfList: [{
      name: "Initial Smurf",
      age: 6,
      height: "25 cm",
      id: 9999
    }]
    
  };
  
  export const reducer = (state = initialState, action) => {
    console.log("in reducer. payload:",action.payload)
    
    switch (action.type) {
      case FETCHING_SMURFS_SUCCESS:
        console.log("first smurf ",action.payload[0])
        return {
          ...state,
          name: action.payload[0].name,
          age: action.payload[0].age,
          height: action.payload[0].height, 
          id: action.payload[0].id
          
          
        };
      case ADDING_SMURFS_SUCCESS:
        return{
          ...state
        }
      default:
        return state;
    }
  };
  