import React from 'react';

class Smurf extends React.Component {
    render() {
        return(<div class="card">
            <img class="card-img-top" src="https://tse4.mm.bing.net/th?id=OIP.hGOH7h8Hpewz7odYBND1hQHaFt&pid=Api" alt="Card image cap"/>
            <div class="card-body">
                <h2 class="card-title">Poppa Smurf</h2>
                <p class="card-text"><b>Position:</b> Village Leader</p>
                <p class="card-text"><b>Nickname:</b> Pops</p>
                <p class="card-text"><b>Description:</b> Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.</p>
                <a href="#" class="btn btn-primary">More Details</a>
            </div>
        </div>);
    }
}

export default Smurf;