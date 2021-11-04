/// TODO: Add RegEx expression for capturing between underscores for libbing (RegEx that might work: _(.*?)_ )
/// TODO: Move a chunk of code into seperate file

import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor() {
        super();
        this.state = {
            cards: Cards,
            libs: Libs,
            deck: [],
            hand: [],
            placedCards: [],
            deckIndex: 14,
            currentLib: [],
            wordTypes: [],
            blankCount: 0,
            wordIndex: 0
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
            let pickedCard = shuffled[i];
            newDeck.push(pickedCard.replace(/\./g, '')); // Remove the periods
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
     * Place the card on the "board," then replace the placed card
     * in hand with new one
     */
    placeCard(id) {
        let deckIndex = this.state.deckIndex;
        let currDeck = this.state.deck;
        let currCard = this.state.hand[id];
        let plCNum = this.state.placedCards.length;
        let max = this.state.currentLib.length;

        if (plCNum < max) {
            this.state.hand.splice(id, 1, currDeck[deckIndex]);
            this.setState({
                deckIndex: deckIndex + 1,
                placedCards: this.state.placedCards.concat(currCard)
            });
        } else {
            console.log("Limit reached");
        }

    }

    /**
     * Extract the blanks, count the number of blanks, then define
     * each blank (ex: noun, verb, etc)
     */
    lib() {
        let len = this.state.libs.length;
        let lib = this.state.libs[Math.floor(Math.random() * len)];
        let exp = /_(.*?)_/g; // Capture everything in between underscores (ex: _noun_)
        let wordTypes = lib.match(exp);
        let arrReplace = lib.replace(exp, '{}');
        let arrSplit = arrReplace.split(/\{\}/g);
        for (let i = 0; i < wordTypes.length; i++) {
            wordTypes[i] = wordTypes[i].replace(/_/g, '');
        }
        this.setState({
            currentLib: this.state.currentLib.concat(arrSplit),
            wordTypes: this.state.wordTypes.concat(wordTypes),
            blankCount: wordTypes.length
        });
    }

    // Once the component mounts, automatically shuffle the cards
    componentDidMount() {
        this.shuffle();
        this.newHand();
        this.lib();
    }


    render() {
        return (
            <div className="Game">
                <h1 className="word-type">{this.state.wordTypes[this.state.wordIndex]}</h1>
                <h3>{this.state.blankCount} blanks left</h3>
                <div className="card-board">
                    {this.state.hand.map((e, i) => {
                        return <div className="card" id={i} key={i} onClick={() => this.placeCard(i)}>{e}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Game;