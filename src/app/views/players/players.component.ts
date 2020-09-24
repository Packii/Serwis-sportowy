import { PlayersApiService } from './../../services/players-api.service';
import { Player } from './../../models/player.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Observable<Player[]>;

  constructor(
    private playersApiService: PlayersApiService
  ) { }

  ngOnInit(): void {
    this.players = this.playersApiService.getPlayers();
  }

}
