import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { BoardComponent } from './board/board.component';
import { IntroComponent } from './intro/intro.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'play', component: BoardComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
