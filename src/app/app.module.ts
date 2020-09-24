
import { Player } from './models/player.interface';
import { PlayersComponent } from './views/players/players.component';
import { TeamsComponent } from './views/teams/teams.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScoreComponent } from './components/score/score.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScoresComponent } from './views/scores/scores.component';





import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ScoreComponent,
    ScoresComponent,
    PlayerComponent,
    PlayersComponent,
    TeamComponent,
    TeamsComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
