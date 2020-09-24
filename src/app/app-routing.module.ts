import { ScoresComponent } from './views/scores/scores.component';
import { NewsComponent } from './views/news/news.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './components/score/score.component';




const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
