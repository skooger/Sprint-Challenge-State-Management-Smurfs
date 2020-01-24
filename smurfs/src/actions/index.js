import axios from 'axios';

export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const ADDING_SMURFS_SUCCESS = 'ADDING_SMURFS_SUCCESS';

export const fetchSmurfs = () => dispatch => {

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        //res.data ==> activity
        console.log(res.data)
        dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {

      });
  };

  export const addSmurfs = (name,age,height,id) => dispatch => {


    axios.post('http://localhost:3333/smurfs',
                  {name:name,
                  age: age,
                  height:height,
                  id:id})
          .then(res => { 
            dispatch({ type: ADDING_SMURFS_SUCCESS, payload: res.data });
          })


  };