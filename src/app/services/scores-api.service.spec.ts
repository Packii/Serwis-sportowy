import { TestBed } from '@angular/core/testing';

import { ScoresApiService } from './scores-api.service';

describe('ScoresApiService', () => {
  let service: ScoresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
