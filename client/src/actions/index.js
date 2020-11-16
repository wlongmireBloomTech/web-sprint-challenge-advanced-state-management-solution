import axios from 'axios';

export const START_API_CALL = 'START_API_CALL';
export const END_API_CALL_SUCCESS = 'END_API_CALL_SUCCESS';
export const END_API_CALL_ERROR = 'END_API_CALL_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR_TEXT = 'SET_ERROR_TEXT';

export const fetchSmurfs = () => dispatch => {
    dispatch({type:START_API_CALL});
    axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type:END_API_CALL_SUCCESS, payload:res.data});
        })
        .catch(err=>{
            dispatchEvent({type:END_API_CALL_ERROR, payload:err})
        })
}

export const addSmurf = ()=> {

}

export const setErrorText = ()=> {

}