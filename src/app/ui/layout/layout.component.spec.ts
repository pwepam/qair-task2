import { createComponentFactory } from '@ngneat/spectator';
import { LayoutComponent } from './layout.component';
import { createHostFactory } from '@ngneat/spectator';

describe('LayoutComponent', () => {
  const createComponent = createComponentFactory(LayoutComponent);
  const createHost = createHostFactory(LayoutComponent);

  it('should have initial rendering state', () => {
    expect(createComponent().fixture).toMatchInlineSnapshot(`
      <qair-layout>
        <header /><aside /><main /><footer />
      </qair-layout>
    `);
  });

  it('should project content to layout', () => {
    const spectator = createHost(
      `<qair-layout>
  <div class="layout-header">Header</div>
  <div class="layout-aside">Aside</div>
  <div class="layout-footer">Footer</div>
  <div class="layout-content">Content</div>
</qair-layout>`,
      {}
    );
    expect(spectator.fixture).toMatchInlineSnapshot(`
      <lib-ngneat-host-component>
        <qair-layout>
          <header>
            <div
              class="layout-header"
            >
              Header
            </div>
          </header>
          <aside>
            <div
              class="layout-aside"
            >
              Aside
            </div>
          </aside>
          <main>
            <div
              class="layout-content"
            >
              Content
            </div>
          </main>
          <footer>
            <div
              class="layout-footer"
            >
              Footer
            </div>
          </footer>
        </qair-layout>
      </lib-ngneat-host-component>
    `);
  });
});
