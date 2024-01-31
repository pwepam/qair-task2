import { CounterBtnComponent } from './counter-btn.component';
import { byText, createHostFactory } from '@ngneat/spectator';
import { withCounterState } from './counter.service';

describe('CounterBtnComponent', () => {
  const createHost = createHostFactory({
    component: CounterBtnComponent,
    template: `<qair-counter-btn />`,
    componentProviders: [withCounterState()],
  });

  it('should render with initial state', () => {
    const spectator = createHost(undefined, {});
    expect(spectator.element).toMatchInlineSnapshot(`
      <lib-ngneat-host-component>
        <qair-counter-btn>
          <button>
             Clicked 0 times
          </button>
        </qair-counter-btn>
      </lib-ngneat-host-component>
    `);
  });

  it('should increment after click', () => {
    const spectator = createHost(undefined, {});
    spectator.click(byText('Clicked 0 times'));
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <lib-ngneat-host-component>
        <qair-counter-btn>
          <button>
             Clicked 1 times
          </button>
        </qair-counter-btn>
      </lib-ngneat-host-component>
    `);
  });
});
