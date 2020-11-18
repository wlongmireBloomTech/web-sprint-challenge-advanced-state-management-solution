import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import App from './../App';
 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './../reducers';
import { initialState } from './../reducers';


const reduxRender = (ui, initState) => {
    const store = createStore(reducer, initState);

    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper});
}

test('renders without errors', async ()=> {
    reduxRender(<App/>, initialState);
});