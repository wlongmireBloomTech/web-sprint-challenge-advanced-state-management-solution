import React, { useState } from 'react';
import { connect } from 'react-redux';

import {addSmurf} from './../actions';

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            [e.target.name]:e.target.value
        });
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(state);
        setState({
            name:"",
            position:"",
            nickname:"",
            description:""
        })
    }

    
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                props.errorText && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorText}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);

}
const mapStateToProps = state => {
    return({
        errorText: state.errorText
    });
}

export default connect(mapStateToProps, { addSmurf })(AddForm);