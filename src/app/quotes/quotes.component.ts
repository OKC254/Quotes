import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, '-Oscar Wilde', '"Be yourself; everyone else is already taken."', new Date(2018, 8, 15) ),
      new Quote(2, '-William W. Purkey', '"You have gotta dance like there is nobody watching, Love like you will never be hurt, Sing like there is nobody listening and live like it is heaven on earth."', new Date(2018, 8, 15) ),
      new Quote(3, '-Mahatma Gandhi', '"Be the change that you wish to see in the world."', new Date(2018, 8, 15) ),
      new Quote(4, '-Martin Luther King Jr.', '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that"', new Date(2018, 8, 15) ),
      new Quote(5, '-Eleanor Roosevelt', '"No one can make you feel inferior without your consent."', new Date(2018, 8, 15) ),
      new Quote(6, '-Friedrich Nietzeche', '"Without music, life would be a mistake."', new Date(2018, 8, 15) ),
    ]


    toogleDetails(index){
        this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
    }

    addNewQuote(quote){
        let quoteLength = this.Quotes.length;
        quote.id=quote.Length+1
        quote.completeDate = new Date(quote.completeDate)
        this.Quotes.push(quote)

    }

    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
            
            if(toDelete){
                this.Quotes.splice(index,1)
            }
        }
    }

  constructor() { }

  ngOnInit() {
  }

}