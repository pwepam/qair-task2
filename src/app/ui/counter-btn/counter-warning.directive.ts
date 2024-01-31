import { Directive, effect, ElementRef, inject, Self } from '@angular/core';
import {
  CounterLimit,
  CounterService,
  DEFAULT_COUNTER_LIMIT,
} from './counter.service';

@Directive({
  selector: '[qairCounterWarning]',
  standalone: true,
})
export class CounterWarningDirective {
  private readonly counterLimit =
    inject(CounterLimit, {
      self: true,
      optional: true,
    }) || DEFAULT_COUNTER_LIMIT;

  constructor(
    @Self() private readonly elementRef: ElementRef<HTMLElement>,
    private readonly counterService: CounterService
  ) {
    effect(() => {
      this.elementRef.nativeElement.classList.toggle(
        'counter-warning',
        this.counterService.count() >= this.counterLimit
      );
    });
  }
}
