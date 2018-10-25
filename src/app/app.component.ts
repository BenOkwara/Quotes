import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  styleUrls: ['./app.component.css']

})
export class AppComponent {

    quotes = [
       new Quote (1, 'Chinese Proverb', 'Behind every able man, there are always other able men.', 0, 0, new Date()),
       new Quote (2, 'Dr. Seuss', 'Dont cry because its over, smile because it happened', 0, 0, new Date()),
       new Quote (3, 'Hudson Taylor', 'There are three stages in the work of God: impossible, difficult,done.', 0, 0, new Date()),
   ];


}
