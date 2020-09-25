import { Team } from './../models/team';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  url = 'https://www.balldontlie.io/api/v1/teams';
  teamsArray: any;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    this.http.get<Team[]>(this.url).toPromise().then(data => {
      this.teamsArray = Object.values(data)[0]
    });
    return this.teamsArray;
  };
}