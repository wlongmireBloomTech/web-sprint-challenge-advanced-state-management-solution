import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
    const { isLoading, smurfs } = props;
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<section className="display">
        <div>
        {
            smurfs.map((smurf)=>{
                return(<div key={smurf.id} >
                    <Smurf smurf={smurf}/>
                </div>)
            })
        }
        </div>
    </section>);
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);