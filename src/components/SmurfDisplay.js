import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from './../actions';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        const { isLoading, smurfs } = this.props;
        return(<section className="display">
            {
                (!isLoading)?(<div>
                    {
                        smurfs.map((smurf)=>{
                            return(<div key={smurf.id} >
                                <Smurf smurf={smurf}/>
                            </div>)
                        })
                    }
                </div>):<div>Loading...</div>
            }
            
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        smurfs:state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);