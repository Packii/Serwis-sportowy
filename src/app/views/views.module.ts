import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoreTableContainerComponent } from './score-table-container/score-table-container.component';
import { PlayersComponent } from './players/players.component';



@NgModule({
  declarations: [PageNotFoundComponent, NewsComponent, ScoreTableComponent, ScoreTableContainerComponent, PlayersComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
