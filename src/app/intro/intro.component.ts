import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { fadeInAnimation } from '../animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class IntroComponent implements OnInit {

  btnClick = function() {
    this.router.navigateByUrl('/play');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
