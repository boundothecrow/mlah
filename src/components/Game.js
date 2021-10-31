import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            test: "WHY",
            cards: Cards,
            libs: Libs,
            cardsShuffled: [],
            currentLib: '',
            hand: []
        }
    }

    /**
     * Shuffle cards, pick 14
     * @returns Array
     */
    newHand() {
        let shuffled = this.state.cards.sort(() => Math.random() - 0.5);
        let newHand = this.state.hand;
        for (let i = 0; i < 14; i++) {
            newHand.push(shuffled[i]);
        }
        this.setState({
            hand: newHand.slice()
        })
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
        this.newHand();
    }


    render() {
        return (
            <div className="Game">
                {console.log(this.state.hand[1])}
            </div>
        );
    }
}

export default Game;