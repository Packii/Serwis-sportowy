import { Player } from './../../models/player.interface';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  
 @Input()
  player: Player;

}
