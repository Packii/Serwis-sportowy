import { Player } from './../models/player.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {

  
  // url = `https://www.balldontlie.io/api/v1/players`;
  url = './../assets/data/players.json';
  playersArray = [];

  constructor(private http: HttpClient) { 
    // this.http.get(this.url).toPromise().then(data => {
      
    //   for (let key in data)
    //     if (data.hasOwnProperty(key))
    //       this.playersArray.push(data[key]);

    //       console.log(this.playersArray);
    //     let Players: [] = this.playersArray[0];
    //     console.log(Players);
    // });
  }

  
  getPlayers(): Observable<Player[]> {
      return this.http.get<Player[]>(this.url);
    
  };

  getPlayer(id: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}/${id}`);
  }
  
}
