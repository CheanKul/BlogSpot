import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component'
import { ICardModel } from '../Models/CardModel';
import { PostsService } from '../posts.service';
import { post } from 'selenium-webdriver/http';
import { map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.component.html',
  styleUrls: ['card-list.component.css']
})
export class CardListComponent implements OnInit {

  CardList: ICardModel[] = [];

  constructor(private posts: PostsService) {

  }

  ngOnInit() {
    this.posts.get('api/home').subscribe(
      data => {
        data.map((element) => this.CardList.push(element));
      });
  }

}
