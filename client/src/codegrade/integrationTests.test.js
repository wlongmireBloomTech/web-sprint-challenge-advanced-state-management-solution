import React from 'react';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/user-event';

import App from './../App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducer from './../reducers';
import { initialState } from './../reducers';


const reduxRender = (ui, initState) => {
    
    const store = createStore(reducer, initState, applyMiddleware(thunk));

    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, {wrapper: Wrapper});
}

const runForm = async (name, position, nickname, description='') => {
    reduxRender(<App/>, initialState);
    await screen.findAllByTestId("smurf");

    const nameInput = screen.getByLabelText(/name:/i);
    const positionInput = screen.getByLabelText(/position:/i);
    const nicknameInput = screen.getByLabelText(/nickname:/i);
    const descriptionInput = screen.getByLabelText(/description:/i);
    
    fireEvent.change(nameInput, {target:{name:'name', value:name}});
    fireEvent.change(positionInput, {target:{name:'position', value:position}});
    fireEvent.change(nicknameInput, {target:{name:'nickname', value:nickname}});
    fireEvent.change(descriptionInput, {target:{name:'description', value:description}});
    
    const button = screen.getByRole("button", {name:/submit smurf/i});
    fireEvent.click(button);
}

test('App renders without errors', async ()=> {
    reduxRender(<App/>, initialState);
});

test('App loads intitial data and displays them correctly', async ()=> {
    reduxRender(<App/>, initialState);
    const smurfs = await screen.findAllByTestId("smurf");
    expect(smurfs).toHaveLength(3);
})

test('App returns a validation error when name not included', async ()=> {
    
    await runForm('', 'worker', 's3', 'description');
    const error = screen.findByText(/Error: Name, position and nickname fields are required./i);
    expect(error).not.toBeNull();
});

test('App returns a validation error when position not included', async ()=> {
    await runForm('smurf 3', '', 's3', 'description');
    const error = screen.findByText(/Error: Name, position and nickname fields are required./i);
    expect(error).not.toBeNull();
});

test('App returns a validation error when nickname not included', async ()=> {
    await runForm('smurf 3', 'worker', '', 'description');
    const error = screen.findByText(/Error: Name, position and nickname fields are required./i);
    expect(error).not.toBeNull();
});

test('App returns a smurf when all values are submitted', async ()=> {
    await runForm('smurf 3', 'worker', 's3', 'description');
    const smurf = screen.findByText(/smurf 3/i);
    expect(smurf).not.toBeNull();
});

test('App returns a smurf when all values but description are submitted', async ()=> {
    await runForm('smurf 4', 'worker', 's3', '');
    const smurf = screen.findByText(/smurf 4/i);
    expect(smurf).not.toBeNull();
});