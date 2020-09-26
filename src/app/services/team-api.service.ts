import { Team } from './../models/team';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  url = 'https://www.balldontlie.io/api/v1/teams';
  teamsArray: any;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<{ data: Team[], meta: any }>(this.url).pipe(
      map(data  => Object.values(data)[0])
    );
  }
}
