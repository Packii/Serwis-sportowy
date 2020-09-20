import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTableContainerComponent } from './score-table-container.component';

describe('ScoreTableContainerComponent', () => {
  let component: ScoreTableContainerComponent;
  let fixture: ComponentFixture<ScoreTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
