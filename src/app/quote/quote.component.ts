 import { Component, OnInit } from '@angular/core';
 import {Quote} from '../quote'

 @Component({
   selector: 'app-quote',
   templateUrl: './quote.component.html',
   styleUrls: ['./quote.component.css']
 })

 export class QuoteComponent implements OnInit {

     quotes = [

       new Quote (1, 'Chinese Proverb','Behind every able man, there are always other able men.', 0, 0, new Date(2018,10,19)),
       new Quote (2, 'Dr. Suess', 'Dont cry because its over, smile because it happened', 0, 0, new Date(2018,10,19)),
       new Quote (3, 'Hudson Taylor','There are three stages in the work of God: impossible, difficult,done.', 0, 0, new Date(2018,10,19)),

     ]

      removeThis(deleteQuote,index) {
        if (deleteQuote) {
          this.quotes.splice(index,1);

        }
      }

        addNewQuote (quote) {
          let quoteLength = this.quotes.length;
          quote.id = quoteLength+1;
          this.quotes.push(quote)
        }

       toogleDetails (index) {

      this.quotes[index].showDescription = !this.quotes[index].showDescription;
       }

   constructor() { }
   ngOnInit() {
   }

 }
