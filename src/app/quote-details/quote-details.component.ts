 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 import {Quote} from '../quote'

 @Component({
   selector: 'app-quote-details',
   templateUrl: './quote-details.component.html',
   styleUrls: ['./quote-details.component.css']
 })
 export class QuoteDetailsComponent implements OnInit {

     @Input () quote:Quote;
     @Output() deleteQuote = new EventEmitter<boolean>();

      delete(deleteIt:boolean) {
        this.deleteQuote.emit(deleteIt);
      }

      upVote () {
        this.quote.upVote ++
      }

      
      downVote () {
        this.quote.downVote ++
      }

   constructor() { }

   ngOnInit() {
   }

 }
