import { TeamApiService } from './../../services/team-api.service';
import { Team } from './../../models/team';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(
    private teamApiService: TeamApiService
  ) { }

  ngOnInit(): void {
    this.teams = this.teamApiService.getTeams()
  }

}
