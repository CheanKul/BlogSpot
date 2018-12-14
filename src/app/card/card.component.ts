import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../Models/CardModel'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  show : boolean=true;
  public Hide = {
    "Collapse" : !this.show
  }
  @Input() Card : CardModel

  constructor() {        
   }

  
  ngOnInit() {
  }


  collapsDetails(){
    alert("Click");
      this.show=!this.show;
  }

}
