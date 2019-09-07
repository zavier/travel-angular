import { TestBed } from '@angular/core/testing';

import { WeekendService } from './weekend.service';

describe('WeekendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekendService = TestBed.get(WeekendService);
    expect(service).toBeTruthy();
  });
});
