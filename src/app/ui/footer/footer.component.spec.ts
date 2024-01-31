import {
  byText,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { FooterComponent } from './footer.component';
import { DEFAULT_COUNTER_LIMIT } from '@qair/ui';

describe('FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createComponentFactory(FooterComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should have initial rendering state', () => {
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-footer>
        <qair-counter-btn>
          <button>
             Clicked 0 times
          </button>
        </qair-counter-btn>
        Footer
      </qair-footer>
    `);
  });

  it('should work with counter button', () => {
    spectator.click(byText('Clicked 0 times'));
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-footer>
        <qair-counter-btn>
          <button>
             Clicked 1 times
          </button>
        </qair-counter-btn>
        Footer
      </qair-footer>
    `);
  });

  it('should have warning indicator after reaching btn limit', () => {
    for (let i = 0; i < DEFAULT_COUNTER_LIMIT; i++) {
      spectator.click(byText(`Clicked ${i} times`));
    }
    expect(spectator.element).toHaveClass('counter-warning');
  });
});
