import { MatchScore } from './../models/match-score';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ScoresApiService {

  url = 'https://www.balldontlie.io/api/v1/games';
  private _dataSource = new BehaviorSubject<boolean>(false);
  // private _moarDataSource = new BehaviorSubject<Object>({});

  constructor(private http: HttpClient) { }

  getScores(): Observable<MatchScore[]> {
    return this.http.get<{ data: MatchScore[], meta: any }>(this.url)
      .pipe(map(res => Object.values(res)[0]));
  }

  sendData(isOpened: boolean) {
    return this._dataSource.next(isOpened);
  };
  getData(): Observable<boolean> {
    return this._dataSource.asObservable();
  }
  // sendMoarData(score: Object) {
  //   return this._moarDataSource.next(score);
  // };
  // getMoarData(): Observable<Object> {
  //   return this._moarDataSource.asObservable();
  // }
}