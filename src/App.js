import React from 'react';
import { HeaderContainer, CritButtonsContainer, EffectListContainer } from './containers';
import './App.css';

export default function App(props){
    return (
        <div className="App">
            <HeaderContainer/>
            <CritButtonsContainer/>
            <EffectListContainer/>
        </div>
    );
}
