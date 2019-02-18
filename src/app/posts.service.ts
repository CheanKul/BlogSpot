import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICardModel } from './Models/CardModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<ICardModel[]> {

    return this.http.get(url)
      .pipe(map(res => {
        debugger; 
        return (<ICardModel[]>res)
      }));
  }

}
