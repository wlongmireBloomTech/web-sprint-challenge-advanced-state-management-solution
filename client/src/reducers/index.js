import React from 'react';
import { START_API_CALL, END_API_CALL_SUCCESS, END_API_CALL_ERROR, ADD_SMURF, SET_ERROR_TEXT}  from './../actions';

const intitalState = {
    errorText:"",
    isLoading: false,
    smurfs:[]
}

const reducer = (state= intitalState, action)=>{
    switch(action.type) {
        case(START_API_CALL):
            return({
                ...state,
                isLoading: true
            });
        case(END_API_CALL_SUCCESS):
            return({
                ...state,
                isLoading: false,
                smurfs: action.payload
            });
        case(END_API_CALL_ERROR):
            return({
                ...state,
                isLoading: false,
                errorText: action.payload
            });
        case(SET_ERROR_TEXT):
            return({
                ...state,
                errorText:action.payload
            });
        default:
            return(state);
    }
}

export default reducer;