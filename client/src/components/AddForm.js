import React from 'react';
import { connect } from 'react-redux';

import {addSmurf} from './../actions';

class AddForm extends React.Component {
    state = {
        name:"",
        position:"",
        nickname:"",
        description:""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name:"",
            position:"",
            nickname:"",
            description:""
        })
    }

    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} value={this.state.name} name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label><br/>
                    <input onChange={this.handleChange} value={this.state.position} name="position" id="position" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nickname:</label><br/>
                    <input onChange={this.handleChange} value={this.state.nickname} name="nickname" id="nickname" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description:</label><br/>
                    <textarea onChange={this.handleChange} value={this.state.description} name="description" id="description" />
                </div>
                {
                    this.props.errorText && <div class="alert alert-danger" role="alert">Error: {this.props.errorText}</div>
                }
                <input type="submit" />
            </form>
        </section>);
    }
}
const mapStateToProps = state => {
    return({
        errorText: state.errorText
    });
}

export default connect(mapStateToProps, { addSmurf })(AddForm);