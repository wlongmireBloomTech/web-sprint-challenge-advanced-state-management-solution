import { START_API_CALL, END_API_CALL_SUCCESS, ADD_SMURF, SET_ERROR_TEXT}  from './../actions';

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
        case(ADD_SMURF):
            return({
                ...state,
                smurfs:[...state.smurfs, action.payload]
            });
        case(SET_ERROR_TEXT):
            return({
                ...state,
                isLoading: false,
                errorText:action.payload
            });
        default:
            return(state);
    }
}

export default reducer;