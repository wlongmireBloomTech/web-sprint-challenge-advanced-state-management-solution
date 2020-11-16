import React from 'react';

class AddForm extends React.Component {
    render() {
        return(<div>
            <h1>Add Smurf</h1>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label><br/>
                    <input name="name" id="name" />
                </div>
                <div class="form-group">
                    <label for="name">Nickname:</label><br/>
                    <input name="name" id="name" />
                </div>
                <div class="form-group">
                    <label for="name">Description:</label><br/>
                    <textArea name="name" id="name" />
                </div>
                <input type="submit" />
            </form>
        </div>);
    }
}

export default AddForm;