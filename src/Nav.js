import React, {useContext} from 'react';
import {HeroContext} from './HeroContext';

function Nav () {
    const {heros} = useContext(HeroContext);
    return (
        <div style={{backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-around', padding: '2%' }} >
        <h2> SuperHeroes </h2>
        <h2> List Of Heroes: {heros.length} </h2>
        </div>
    )
}

export default Nav;