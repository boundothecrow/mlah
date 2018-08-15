import { Component, OnInit } from '@angular/core';
import { whitecards } from '../whitecards';
import { madlibs } from '../madlibs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  currentStory = madlibs[this.randomNum(madlibs.length)];
  currentCards = [];

  selectedCards = [];   // The hand if you will
  blankCount: number;   // How many blanks will be in the story
  story: string;        // The assembled story

  /**
   * Draw a full hand to start off wtih
   */
  drawCards() {
    let len = whitecards.length
    for (var i = 0; i < 5; i++) {
      this.currentCards.push(whitecards[this.randomNum(len)]);
    }
  }
  
  /**
   * Draw one card
   */
  drawCard() {
    let len = whitecards.length;
    this.currentCards.push(whitecards[this.randomNum(len)]);
  }
  
  /**
   * Return a random number
   * @param n number
   */
  randomNum(n: number) {
    return (Math.floor(Math.random() * n));
  }
  
  /**
   * Get the card selected to put into the blank bank, while removing that one in the hand
   * @param card string
   */
  getCard(card: string) {
    let index = this.currentCards.indexOf(card);
    if (index > -1) {
      this.currentCards.splice(index, 1);
    }
    this.drawCard();
    this.selectedCards.push(card);
    this.blankCount--;
  }

  /**
   * Get the number of blanks you can put into the story.
   */
  storyWordCount() {
    this.blankCount = (this.currentStory.length - 1);
  }

  /**
   * Unleash the hell that was generated.
   */
  assembleStory() {

  }

  constructor() {
    this.drawCards();
    this.storyWordCount();
  }

  ngOnInit() {
  }

}
