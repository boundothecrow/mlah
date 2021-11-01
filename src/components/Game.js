import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            cards: Cards,
            libs: Libs,
            currentLib: '',
            deck: [],
            hand: [],
            deckIndex: 14,
        }
    }

    /**
     * Shuffle entire collection of cards, then only pick 50 of them
     * to be added to the deck
     */
    shuffle() {
        let shuffled = this.state.cards.sort(() => Math.random() - 0.5);
        let newDeck = this.state.deck;
        for (let i = 0; i < 50; i++) {
            newDeck.push(shuffled[i]);
        }
        this.setState({
            deck: newDeck.slice()
        })
    }

    /**
     * Pick 14 cards
     * @returns Array
     */
    newHand() {
        let newHand = this.state.hand;
        for (let i = 0; i < 14; i++) {
            newHand.push(this.state.deck[i]);
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
        let deckIndex = this.state.deckIndex;
        let currDeck = this.state.deck;

        this.state.hand.splice(id, 1, currDeck[deckIndex]);
        this.setState({ deckIndex: deckIndex + 1 })
    }

    // Once the component mounts, automatically shuffle the cards
    componentDidMount() {
        this.shuffle();
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