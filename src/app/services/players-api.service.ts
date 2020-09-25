import { Player } from './../models/player.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {


  url = `https://www.balldontlie.io/api/v1/players`;
  playersArray: any;

  constructor(private http: HttpClient) { }


  // getPlayers(): Observable<Player[]> {
  //   this.http.get<Player[]>(this.url).toPromise().then(data => {
  //     this.playersArray = Object.values(data)[0];
  //   });
  //   return this.playersArray
  // };

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url).pipe(Map(res => res[0]))
  }
};

