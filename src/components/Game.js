import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            cards: Cards,
            libs: Libs,
            hand: [],
            currentLib: ''
        }
    }

    /**
     * Shuffles the whole array
     * @returns Array
     */
    shuffle() {
        let shuffled = this.state.cards.sort(() => Math.random() - 0.5);
        return shuffled;
    }

    /**
     * Picks a random lib
     * @returns String
     */
    pickLib() {
        let len = this.state.libs.length;
        return this.state.libs[Math.floor(Math.random() * len)];
    }

    // Once the component mounts, automatically shuffle the cards
    componentDidMount() {
        this.setState({
            hand: this.shuffle(),
            currentLib: this.pickLib()
        });
    }

    render() {
        return (
            <div className="Game">
                
            </div>
        );
    }
}

export default Game;