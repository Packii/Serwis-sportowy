import { Player } from './../models/player.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {

  
  url = 'https://www.balldontlie.io/api/v1/players'

  constructor(private http: HttpClient) { }

    getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  };

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.url}/${id}`);
  }
  
}
