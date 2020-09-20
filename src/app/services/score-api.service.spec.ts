import { TestBed } from '@angular/core/testing';

import { ScoreApiService } from './score-api.service';

describe('ScoreApiService', () => {
  let service: ScoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
