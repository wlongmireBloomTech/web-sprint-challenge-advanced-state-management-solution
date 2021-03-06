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
            dispatch(setErrorText(""));
        })
        .catch(err=> {
            dispatch(setErrorText(err.response.data.Error));
        })
}

export const addSmurf = (smurf) => dispatch => {
    console.log(smurf);
    if (!smurf.name || !smurf.nickname || !smurf.position) {
        dispatch({type: SET_ERROR_TEXT, payload:"Name, Position and Nickname are required fields"});
    }
    
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=>{
            dispatch({type:ADD_SMURF, payload:{...smurf, id:Date.now() }});
            dispatch(setErrorText(""));
        })
        .catch(err=>{
            dispatch(setErrorText(err.response.data.Error));
        });
}

export const setErrorText = (err) => {
    return({type:SET_ERROR_TEXT, payload:err});
}