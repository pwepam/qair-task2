import {
  byText,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { DEFAULT_COUNTER_LIMIT } from '@qair/ui';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory(HeaderComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should have initial rendering state', () => {
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-header>
        Header
        <qair-counter-btn
          class="layout-header"
        >
          <button>
             Clicked 0 times
          </button>
        </qair-counter-btn>
      </qair-header>
    `);
  });

  it('should work with counter button', () => {
    spectator.click(byText('Clicked 0 times'));
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-header>
        Header
        <qair-counter-btn
          class="layout-header"
        >
          <button>
             Clicked 1 times
          </button>
        </qair-counter-btn>
      </qair-header>
    `);
  });

  it('should have warning indicator after reaching btn limit', () => {
    for (let i = 0; i < DEFAULT_COUNTER_LIMIT; i++) {
      spectator.click(byText(`Clicked ${i} times`));
    }
    expect(spectator.element).toHaveClass('counter-warning');
  });
});
