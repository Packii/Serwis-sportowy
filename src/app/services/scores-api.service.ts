import { MatchScore } from './../models/match-score';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ScoresApiService {

  url = 'https://www.balldontlie.io/api/v1/games';
  isOpened: boolean;

  constructor(private http: HttpClient) { }

  getScores(): Observable<MatchScore[]> {
    return this.http.get<{ data: MatchScore[], meta: any }>(this.url)
      .pipe(map(res => Object.values(res)[0]));
  }
  private _dataSource = new Subject<boolean>();
  sendData(data: boolean) {
    return this._dataSource.next(this.isOpened);
  }
  getData(): Observable<boolean> {
    return this._dataSource.asObservable();
  }
}
