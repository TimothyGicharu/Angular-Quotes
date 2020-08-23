import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('First quote', 'First description', new Date(2020, 7, 22)),
    new Quote('Second quote', 'Second description', new Date(2020, 7, 23)),
    new Quote('Third quote', 'Third description', new Date(2020, 7, 13))
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
