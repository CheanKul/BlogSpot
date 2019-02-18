import { Component, OnInit, Input } from '@angular/core';
import { ICardModel } from '../../Models/CardModel'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Collapse: boolean = false;
  ShowDetails: boolean = true;

  @Input() Card: ICardModel

  constructor() {
  }


  ngOnInit() {
  }


  collapsDetails() {
    return {
      Collapse: this.Collapse = !this.Collapse,
      ShowDetails: this.ShowDetails = !this.ShowDetails
    };
  }

}
