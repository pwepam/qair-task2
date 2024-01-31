import {
  byText,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';
import { DEFAULT_COUNTER_LIMIT } from '@qair/ui';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let spectator: Spectator<SideNavComponent>;
  const createComponent = createComponentFactory(SideNavComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should have initial rendering state', () => {
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-side-nav>
        SideNav
        <qair-counter-btn
          class="layout-header"
        >
          <button>
             Clicked 0 times
          </button>
        </qair-counter-btn>
      </qair-side-nav>
    `);
  });

  it('should work with counter button', () => {
    spectator.click(byText('Clicked 0 times'));
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <qair-side-nav>
        SideNav
        <qair-counter-btn
          class="layout-header"
        >
          <button>
             Clicked 1 times
          </button>
        </qair-counter-btn>
      </qair-side-nav>
    `);
  });

  it('should have warning indicator after reaching btn limit', () => {
    for (let i = 0; i < DEFAULT_COUNTER_LIMIT; i++) {
      spectator.click(byText(`Clicked ${i} times`));
    }
    expect(spectator.element).toHaveClass('counter-warning');
  });
});
