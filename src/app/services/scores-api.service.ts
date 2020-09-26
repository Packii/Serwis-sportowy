import { MatchScore } from './../models/match-score';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ScoresApiService {

  url = 'https://www.balldontlie.io/api/v1/games';
  arrayData: any;

  constructor(private http: HttpClient) { }

  getScores(): Observable<MatchScore[]> {
    this.http.get<MatchScore[]>(this.url).toPromise().then(data => {
      this.arrayData = Object.values(data)[0];
    })
    return this.arrayData;
  }
}

