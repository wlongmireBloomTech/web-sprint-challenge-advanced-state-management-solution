import React from 'react';
import Smurf from './Smurf';

class SmurfDisplay extends React.Component {
    render() {
        return(<div>
            <h1>Smurf Database</h1>
            <div className="d-flex flex-md-row flex-column">
                <Smurf/>
                <Smurf/>
                <Smurf/>
            </div>
        </div>);
    }
}

export default SmurfDisplay;