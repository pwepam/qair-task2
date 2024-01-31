import { TestBed } from '@angular/core/testing';

import {
  CounterLimit,
  CounterService,
  DEFAULT_COUNTER_LIMIT,
  withCounterState,
} from './counter.service';

describe('CounterService', () => {
  function setup(limit?: number) {
    TestBed.configureTestingModule({
      providers: [withCounterState(limit)],
    });
    return {
      service: TestBed.inject(CounterService),
      limit: TestBed.inject(CounterLimit),
    };
  }

  it('should be created with default limit', () => {
    const { service, limit } = setup();
    expect(service).toBeTruthy();
    expect(limit).toBe(DEFAULT_COUNTER_LIMIT);
  });

  it('should be created with custom limit', () => {
    const testLimit = 5;
    const { service, limit } = setup(testLimit);
    expect(service).toBeTruthy();
    expect(limit).toBe(testLimit);
  });
});
