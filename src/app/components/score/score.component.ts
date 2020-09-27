import { Subscription } from 'rxjs';
import { MatchScore } from './../../models/match-score';
import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ScoresApiService } from 'src/app/services/scores-api.service';






@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input()
  score: MatchScore;
  // @Output() onSelect: EventEmitter<MatchScore> = new EventEmitter();

  isOpened: boolean = false;
  subscription: Subscription;
  constructor(private scoresApiService: ScoresApiService) { }

  // ngOnInit() {
  //   this.subscription = this.scoresApiService.getData().subscribe(isOpened => {
  //     this.isOpened = isOpened;
  //   });
  // }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // onClicked(score) {
  //   this.onSelect.emit(score)
  // }

  toggleOpened() {
    this.isOpened = !this.isOpened;
  }
}
