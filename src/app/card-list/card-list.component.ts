import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component'
import { CardModel } from '../Models/CardModel';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  CardList : CardModel[];

  

  constructor() {
     
   }

  ngOnInit() {
    this.CardList=[];
    this.CardList.push({Header:"Naruto",Content:"I Love Naruto",SubTitile:"Characters",imgURL:"602092.jpg"})
    this.CardList.push({Header:"Death Note",Content:"I Love Naruto",SubTitile:"Characters",imgURL:"602092.jpg"})
    this.CardList.push({Header:"Friend",Content:"I Love Naruto",SubTitile:"Characters",imgURL:"602092.jpg"})
    this.CardList.push({Header:"Big Bang Theory",Content:"I Love Naruto",SubTitile:"Characters",imgURL:"602092.jpg"})

  }

}
