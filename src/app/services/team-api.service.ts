import { Team } from './../models/team';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  url = './../../assets/data/team.json';
  teamsArray = [];

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  };

  getTeam(id: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.url}/${id}`)
  }
}
