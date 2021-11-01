import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor() {
        super();
        this.state = {
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

    removeCard(id) {
        this.state.hand.splice(id, 1);
        console.log(this.state.hand);

    }

    // Once the component mounts, automatically shuffle the cards
    componentDidMount() {
        this.newHand();
    }


    render() {
        return (
            <div className="Game">
                <div>
                    <h1>Noun</h1>
                </div>
                <div className="card-board">
                    {this.state.hand.map((e, i) => {
                        return <div className="card" id={i} key={i} onClick={() => this.removeCard(i)}>{e}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Game;