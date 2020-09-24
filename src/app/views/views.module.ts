import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ScoresComponent } from './scores/scores.component';
import { PlayersComponent } from './players/players.component';
import { ObjngforPipe } from './scores/objngfor.pipe';



@NgModule({
  declarations: [PageNotFoundComponent, NewsComponent, ScoresComponent, PlayersComponent, ObjngforPipe],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
