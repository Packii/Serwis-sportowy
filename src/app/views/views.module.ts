import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [PageNotFoundComponent, NewsComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
