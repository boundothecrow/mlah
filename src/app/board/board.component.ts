import { Component, OnInit } from '@angular/core';
import { whitecards } from '../whitecards';
import { madlibs } from '../madlibs';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})

export class BoardComponent implements OnInit {

  currentStory = madlibs[this.randomNum(madlibs.length)];
  currentCards = [];

  selectedCards = [];   // The hand if you will
  blankCount = 0;   // How many blanks will be in the story
  counter = 0;  // Helps properly assemble the story
  story = [];        // The assembled story

  /**
   * Draw a full hand
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
      this.story.push(this.currentStory[this.counter]); // At part of the story
      this.story.push(this.currentCards[index]);  // Append the card within the blanks in the story
      this.currentCards.splice(index, 1); // Remove the card selected from the hand
    }
    this.drawCard();  // Draw a new card
    // Increment and deincrement accordingly
    this.blankCount--;
    this.counter++;
    // There's always that one last part of the array that never gets put into the completed story.
    // Even if it's just a punctuation, add it anways
    if (this.counter === (this.currentStory.length - 1)) {
      this.story.push(this.currentStory[this.counter]);
    }
  }

  /**
   * There's this stubborn issue where if there is a sentence after the last blank, then it will do nothing.
   * This is meant to quick-fix the issue for the time being
   */
  addOneMore() {
    console.log("HI, I'M MISTER MEESEEKS, LOOK AT ME");
    this.counter++;
    this.story.push(this.currentStory[this.counter]);
  }

  /**
   * Get the number of blanks you can put into the story.
   */
  storyWordCount() {
    this.blankCount = (this.currentStory.length - 1);
  }

  replay() {
    window.location.reload();
  }

  constructor() {
    this.drawCards();
    this.storyWordCount();
  }

  ngOnInit() {
  }

}
