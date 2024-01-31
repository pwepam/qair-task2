import { Directive, inject } from '@angular/core';
import { CounterService, withCounterState } from './counter.service';

@Directive({
  selector: '[qairCounterProvider]',
  standalone: true,
  providers: [withCounterState()],
})
export class CounterProviderDirective {
  readonly counterService = inject(CounterService);
}
