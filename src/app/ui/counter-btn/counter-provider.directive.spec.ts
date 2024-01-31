import { Component, ViewChild } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { CounterProviderDirective } from './counter-provider.directive';

@Component({
  template: '<div qairCounterProvider>Hello World</div>',
  standalone: true,
  imports: [CounterProviderDirective],
})
class CustomHostComponent {
  @ViewChild(CounterProviderDirective)
  readonly counterProviderDirective!: CounterProviderDirective;
}

describe('CounterProviderDirective', () => {
  let spectator: Spectator<CustomHostComponent>;
  const createComponent = createComponentFactory(CustomHostComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should provide service', () => {
    expect(
      spectator.query(CounterProviderDirective)?.counterService
    ).toBeTruthy();
  });
});
