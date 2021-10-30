import React, { Component } from 'react';
import Cards from '../assets/cards.json';
import Libs from '../assets/libs.json';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
            cardsShuffled: ''
        }
    }

    shuffle() {
        return this.state.cards.sort(() => Math.random() - 0.5);
    }

    componentDidMount() {
        this.setState({cardsShuffled: this.shuffle()});
    }

    render() {
        return (
            <div className="Game">
            </div>
        );
    }
}

export default Game;