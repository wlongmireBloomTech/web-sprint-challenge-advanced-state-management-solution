import React from 'react';
import { render } from '@testing-library/react';
import { SmurfDisplay } from './../components/SmurfDisplay';
import { fetchSmurfs } from './../actions';

test('renders without errors', async ()=> {
    const smurfs = [];
    render(<SmurfDisplay smurfs={smurfs} fetchSmurfs={fetchSmurfs}/>);
});