import {
    FETCHING_SMURFS_SUCCESS,
    ADDING_SMURFS_SUCCESS
  } from '../actions';

const initialState = {

    smurfList: [{

    }]
    
  };
  
  export const reducer = (state = initialState, action) => {
    console.log("in reducer. payload:",action.payload)
    
    switch (action.type) {
      case FETCHING_SMURFS_SUCCESS:
        console.log("first smurf ",action.payload[0])
        return {
          ...state,
          smurfList: action.payload
          
        };
      case ADDING_SMURFS_SUCCESS:
        return{
          ...state
        }
      default:
        return state;
    }
  };
  