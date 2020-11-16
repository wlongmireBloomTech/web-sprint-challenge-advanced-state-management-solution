import React from 'react';

class AddForm extends React.Component {
    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nickname:</label><br/>
                    <input name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Description:</label><br/>
                    <textarea name="name" id="name" />
                </div>
                <input type="submit" />
            </form>
        </section>);
    }
}

export default AddForm;