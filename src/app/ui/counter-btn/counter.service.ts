import { Injectable, InjectionToken, Provider, signal } from '@angular/core';

export const DEFAULT_COUNTER_LIMIT = 10;

export const CounterLimit = new InjectionToken<number>('Counter limit');

export function withCounterState(
  limit: number = DEFAULT_COUNTER_LIMIT
): Provider[] {
  return [
    {
      provide: CounterService,
    },
    {
      provide: CounterLimit,
      useValue: limit,
    },
  ];
}

@Injectable()
export class CounterService {
  private readonly _count = signal(0);

  count = this._count.asReadonly();

  increment() {
    this._count.update((value) => value + 1);
  }
}
