import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Intro extends Component {
    render() {
        return (
            <div class="Start">
                <h1>Mad Libs Against Humanity</h1>
                <p>Intro text. Fill it in.</p>
                <h2>Rules</h2>
                <p>Rules text. Also fill it in, ya dingus.</p>
                <NavLink to="/game" class="btn-start" >Start</NavLink>
            </div>
        );
    }
}

export default Intro;