import {
  byText,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { DEFAULT_COUNTER_LIMIT } from '@qair/ui';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let spectator: Spectator<MainComponent>;
  const createComponent = createComponentFactory(MainComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should have initial rendering state', () => {
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-main>
        <div
          class="counter-wrapper"
          qaircounterprovider=""
          qaircounterwarning=""
        >
           Both counter increases on click 
          <qair-counter-btn>
            <button>
               Clicked 0 times
            </button>
          </qair-counter-btn>
          <qair-counter-btn>
            <button>
               Clicked 0 times
            </button>
          </qair-counter-btn>
        </div>
      </qair-main>
    `);
  });

  it('should work with counter button and increment both counters', () => {
    spectator.click(byText('Clicked 0 times'));
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-main>
        <div
          class="counter-wrapper"
          qaircounterprovider=""
          qaircounterwarning=""
        >
           Both counter increases on click 
          <qair-counter-btn>
            <button>
               Clicked 1 times
            </button>
          </qair-counter-btn>
          <qair-counter-btn>
            <button>
               Clicked 1 times
            </button>
          </qair-counter-btn>
        </div>
      </qair-main>
    `);
  });

  it('should have warning indicator on wrapper element after reaching btn limit', () => {
    for (let i = 0; i < DEFAULT_COUNTER_LIMIT; i++) {
      spectator.click(byText(`Clicked ${i} times`));
    }

    expect(spectator.element).not.toHaveClass('counter-warning');
    expect(spectator.query('.counter-wrapper')).toHaveClass('counter-warning');
  });
});
