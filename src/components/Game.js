import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
            libs: Libs,
            cardsShuffled: '',
            currentLib: ''
        }
    }

    /**
     * Shuffles the whole array
     * @returns Array
     */
    shuffle() {
        return this.state.cards.sort(() => Math.random() - 0.5);
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
            cardsShuffled: this.shuffle(),
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